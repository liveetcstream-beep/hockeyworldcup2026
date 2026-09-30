<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'error' => 'Only POST method allowed']);
    exit;
}

$rawInput = file_get_contents('php://input');
if (empty($rawInput)) {
    echo json_encode(['success' => false, 'error' => 'Empty request body']);
    exit;
}

$data = json_decode($rawInput, true);
if (!$data || !is_array($data)) {
    echo json_encode(['success' => false, 'error' => 'Invalid JSON received']);
    exit;
}

$title = isset($data['title']) ? trim($data['title']) : '';
$slug = isset($data['urlSlug']) ? trim($data['urlSlug']) : '';
$html = isset($data['htmlContent']) ? $data['htmlContent'] : '';
$metaDesc = isset($data['metaDescription']) ? trim($data['metaDescription']) : '';
$category = isset($data['category']) ? trim($data['category']) : 'fall-recipes';
$featuredImage = isset($data['featuredImage']) ? trim($data['featuredImage']) : '';

if (empty($title) || empty($slug) || empty($html)) {
    echo json_encode(['success' => false, 'error' => 'Missing title, urlSlug, or htmlContent']);
    exit;
}

$baseDir = dirname(__DIR__);
$postsDir = $baseDir . DIRECTORY_SEPARATOR . 'posts';
if (!is_dir($postsDir)) {
    mkdir($postsDir, 0777, true);
}

// Write post HTML file
$postFilePath = $postsDir . DIRECTORY_SEPARATOR . $slug . '.html';
$written = file_put_contents($postFilePath, $html);
if ($written === false) {
    echo json_encode(['success' => false, 'error' => 'Could not write post HTML file']);
    exit;
}

$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || (isset($_SERVER['SERVER_PORT']) && $_SERVER['SERVER_PORT'] == 443)) ? "https://" : "http://";
$host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'localhost';
$postUrl = 'posts/' . $slug;
$fullCanonical = $protocol . $host . '/' . $postUrl;
$fullCanonicalHtml = $fullCanonical . '.html';

// 1. Update sitemap.xml
$sitemapPath = $baseDir . DIRECTORY_SEPARATOR . 'sitemap.xml';
$currentDate = date('Y-m-d');
if (file_exists($sitemapPath)) {
    $sitemapContent = file_get_contents($sitemapPath);
    if (strpos($sitemapContent, $slug) === false) {
        $newEntry = "  <url>\n    <loc>" . htmlspecialchars($fullCanonical, ENT_XML1) . "</loc>\n    <lastmod>" . $currentDate . "</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n";
        $newEntry .= "  <url>\n    <loc>" . htmlspecialchars($fullCanonicalHtml, ENT_XML1) . "</loc>\n    <lastmod>" . $currentDate . "</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n</urlset>";
        if (strpos($sitemapContent, '</urlset>') !== false) {
            $sitemapContent = str_replace('</urlset>', $newEntry, $sitemapContent);
            file_put_contents($sitemapPath, $sitemapContent);
        }
    }
}

// 2. Prepare card HTML for posts.html & index.html
$catMap = [
    'fall-recipes'     => ['name' => 'Fall Recipes',     'slug' => 'fall-recipes'],
    'holiday-recipes'  => ['name' => 'Holiday Feasts',    'slug' => 'holiday-recipes'],
    'budget-meals'     => ['name' => 'Budget Meals',      'slug' => 'budget-meals'],
    'quick-dinners'    => ['name' => 'Quick Dinners',     'slug' => 'quick-dinners'],
    'crockpot-recipes' => ['name' => 'Crockpot Meals',    'slug' => 'crockpot-recipes'],
    'air-fryer'        => ['name' => 'Air Fryer',         'slug' => 'air-fryer'],
    'desserts'         => ['name' => 'Easy Desserts',     'slug' => 'desserts'],
];

$rawCat = isset($data['category']) ? trim($data['category']) : 'fall-recipes';
$categoryBadge = isset($catMap[$rawCat]) ? $catMap[$rawCat]['name'] : ucwords(str_replace(['-', '_'], ' ', $rawCat));
$categorySlug = isset($catMap[$rawCat]) ? $catMap[$rawCat]['slug'] : $rawCat;

$cleanDesc = htmlspecialchars(mb_substr($metaDesc, 0, 115)) . '...';
$safeTitle = htmlspecialchars($title);
$safeImg = '/' . ltrim(str_replace($protocol . $host . '/', '', $featuredImage), '/');
if (strpos($safeImg, '/assets/images/') === false && !empty($featuredImage)) {
    $safeImg = '/assets/images/' . basename($featuredImage);
}
$fullImgUrl = $protocol . $host . $safeImg;
$dateFormatted = date('M Y');

$cardHtml = "                <!-- Post: " . $slug . " -->\n";
$cardHtml .= "                <article class=\"recipe-card\" data-category=\"" . htmlspecialchars($categorySlug) . "\">\n";
$cardHtml .= "                    <div class=\"card-img-wrapper\">\n";
$cardHtml .= "                        <span class=\"card-category-badge\">" . htmlspecialchars($categoryBadge) . "</span>\n";
$cardHtml .= "                        <button class=\"pin-save-overlay-btn\" data-title=\"" . $safeTitle . "\" data-image=\"" . $fullImgUrl . "\">\n";
$cardHtml .= "                            <svg viewBox=\"0 0 24 24\"><path d=\"M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z\"/></svg> Save Pin\n";
$cardHtml .= "                        </button>\n";
$cardHtml .= "                        <img src=\"" . $safeImg . "\" alt=\"" . $safeTitle . "\" loading=\"lazy\">\n";
$cardHtml .= "                    </div>\n";
$cardHtml .= "                    <div class=\"card-content\">\n";
$cardHtml .= "                        <div class=\"card-meta\"><span>📅 " . $dateFormatted . "</span><span>⏱️ 8 min read</span></div>\n";
$cardHtml .= "                        <h3 class=\"card-title\"><a href=\"/posts/" . $slug . "\">" . $safeTitle . "</a></h3>\n";
$cardHtml .= "                        <p class=\"card-excerpt\">" . $cleanDesc . "</p>\n";
$cardHtml .= "                        <div class=\"card-footer\"><span>Cozy Plate Kitchen</span><a href=\"/posts/" . $slug . "\">Read Article ➔</a></div>\n";
$cardHtml .= "                    </div>\n";
$cardHtml .= "                </article>\n";

$gridNeedle = '<div class="grid-3" id="allPostsGrid">';

// Update posts.html
$postsHtmlPath = $baseDir . DIRECTORY_SEPARATOR . 'posts.html';
if (file_exists($postsHtmlPath)) {
    $postsHtml = file_get_contents($postsHtmlPath);
    if (strpos($postsHtml, $slug) === false && strpos($postsHtml, $gridNeedle) !== false) {
        $postsHtml = str_replace($gridNeedle, $gridNeedle . "\n" . $cardHtml, $postsHtml);
        file_put_contents($postsHtmlPath, $postsHtml);
    }
}

// Update index.html
$indexHtmlPath = $baseDir . DIRECTORY_SEPARATOR . 'index.html';
if (file_exists($indexHtmlPath)) {
    $indexHtml = file_get_contents($indexHtmlPath);
    if (strpos($indexHtml, $slug) === false && strpos($indexHtml, $gridNeedle) !== false) {
        $indexHtml = str_replace($gridNeedle, $gridNeedle . "\n" . $cardHtml, $indexHtml);
        file_put_contents($indexHtmlPath, $indexHtml);
    }
}

echo json_encode([
    'success' => true,
    'url' => 'posts/' . $slug . '.html',
    'filePath' => 'posts/' . $slug . '.html',
    'message' => 'Article published and integrated into posts.html, index.html, and sitemap.xml successfully'
]);
