<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$baseDir = dirname(__DIR__);
$postsDir = $baseDir . DIRECTORY_SEPARATOR . 'posts';
$sitemapPath = $baseDir . DIRECTORY_SEPARATOR . 'sitemap.xml';
$postsHtmlPath = $baseDir . DIRECTORY_SEPARATOR . 'posts.html';
$indexHtmlPath = $baseDir . DIRECTORY_SEPARATOR . 'index.html';

if (!is_dir($postsDir)) {
    mkdir($postsDir, 0777, true);
}

$files = glob($postsDir . DIRECTORY_SEPARATOR . '*.html');
$totalPosts = count($files);
$sitemapAdded = 0;
$postsAdded = 0;

$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || (isset($_SERVER['SERVER_PORT']) && $_SERVER['SERVER_PORT'] == 443)) ? "https://" : "http://";
$host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'localhost';

// 1. Sitemap Sync
$sitemapContent = file_exists($sitemapPath) ? file_get_contents($sitemapPath) : '';
if (empty($sitemapContent)) {
    $sitemapContent = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n  <url>\n    <loc>" . $protocol . $host . "/</loc>\n    <lastmod>" . date('Y-m-d') . "</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>";
}

// 2. Read index.html and posts.html
$postsHtml = file_exists($postsHtmlPath) ? file_get_contents($postsHtmlPath) : '';
$indexHtml = file_exists($indexHtmlPath) ? file_get_contents($indexHtmlPath) : '';
$gridNeedle = '<div class="grid-3" id="allPostsGrid">';

foreach ($files as $file) {
    $filename = basename($file);
    $slug = basename($file, '.html');
    $fullUrl = $protocol . $host . '/posts/' . $slug;
    $fullUrlHtml = $protocol . $host . '/posts/' . $filename;

    // Sitemap entry
    if (strpos($sitemapContent, $slug) === false) {
        $entry = "  <url>\n    <loc>" . htmlspecialchars($fullUrl, ENT_XML1) . "</loc>\n    <lastmod>" . date('Y-m-d', filemtime($file)) . "</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n";
        $entry .= "  <url>\n    <loc>" . htmlspecialchars($fullUrlHtml, ENT_XML1) . "</loc>\n    <lastmod>" . date('Y-m-d', filemtime($file)) . "</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n</urlset>";
        $sitemapContent = str_replace('</urlset>', $entry, $sitemapContent);
        $sitemapAdded++;
    }

    // Check if missing from posts.html or index.html
    $missingInPosts = (!empty($postsHtml) && strpos($postsHtml, $slug) === false);
    $missingInIndex = (!empty($indexHtml) && strpos($indexHtml, $slug) === false);

    if ($missingInPosts || $missingInIndex) {
        $fileContent = file_get_contents($file);
        
        // Extract title
        preg_match('/<title>(.*?)<\/title>/i', $fileContent, $titleMatch);
        $rawTitle = !empty($titleMatch[1]) ? trim($titleMatch[1]) : $slug;
        $title = trim(preg_replace('/\s*-\s*Decor Canvas.*$/i', '', $rawTitle));
        $title = trim(preg_replace('/\s*\|\s*Home Decor Studio.*$/i', '', $title));

        // Extract description
        preg_match('/<meta[^>]+name=[\"\']description[\"\'][^>]+content=[\"\']([^\"\']*)[\"\']/i', $fileContent, $descMatch);
        $desc = !empty($descMatch[1]) ? mb_substr(trim($descMatch[1]), 0, 115) . '...' : 'Explore inspiring home decor ideas, layouts, and Pinterest aesthetic guides...';

        // Extract image
        preg_match('/<meta[^>]+property=[\"\']og:image[\"\'][^>]+content=[\"\']([^\"\']*)[\"\']/i', $fileContent, $imgMatch);
        $img = !empty($imgMatch[1]) ? $imgMatch[1] : '';
        if (empty($img)) {
            preg_match('/<img[^>]+src=[\"\']([^\"\']*assets\/images\/[^\"\']*)[\"\']/i', $fileContent, $subImgMatch);
            $img = !empty($subImgMatch[1]) ? $subImgMatch[1] : '/assets/images/favicon.jpg';
        }
        if (!preg_match('/^http/i', $img) && !preg_match('/^\//', $img)) {
            $img = '/' . $img;
        }
        $fullImg = preg_match('/^http/i', $img) ? $img : ($protocol . $host . $img);

        $cardHtml = "                <!-- Post: " . $slug . " -->\n";
        $cardHtml .= "                <article class=\"decor-card\" data-category=\"kitchen\">\n";
        $cardHtml .= "                    <div class=\"card-img-wrapper\">\n";
        $cardHtml .= "                        <span class=\"card-category-badge\">Decor Ideas</span>\n";
        $cardHtml .= "                        <button class=\"pin-save-overlay-btn\" data-title=\"" . htmlspecialchars($title) . "\" data-image=\"" . htmlspecialchars($fullImg) . "\">\n";
        $cardHtml .= "                            <svg viewBox=\"0 0 24 24\"><path d=\"M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z\"/></svg> Save Pin\n";
        $cardHtml .= "                        </button>\n";
        $cardHtml .= "                        <img src=\"" . htmlspecialchars($img) . "\" alt=\"" . htmlspecialchars($title) . "\" loading=\"lazy\">\n";
        $cardHtml .= "                    </div>\n";
        $cardHtml .= "                    <div class=\"card-content\">\n";
        $cardHtml .= "                        <div class=\"card-meta\"><span>📅 " . date('M Y', filemtime($file)) . "</span><span>⏱️ 8 min read</span></div>\n";
        $cardHtml .= "                        <h3 class=\"card-title\"><a href=\"/posts/" . $slug . "\">" . htmlspecialchars($title) . "</a></h3>\n";
        $cardHtml .= "                        <p class=\"card-excerpt\">" . htmlspecialchars($desc) . "</p>\n";
        $cardHtml .= "                        <div class=\"card-footer\"><span>Decor Canvas Editor</span><a href=\"/posts/" . $slug . "\">Read Article ➔</a></div>\n";
        $cardHtml .= "                    </div>\n";
        $cardHtml .= "                </article>\n";

        if ($missingInPosts && strpos($postsHtml, $gridNeedle) !== false) {
            $postsHtml = str_replace($gridNeedle, $gridNeedle . "\n" . $cardHtml, $postsHtml);
            $postsAdded++;
        }
        if ($missingInIndex && strpos($indexHtml, $gridNeedle) !== false) {
            $indexHtml = str_replace($gridNeedle, $gridNeedle . "\n" . $cardHtml, $indexHtml);
            $postsAdded++;
        }
    }
}

file_put_contents($sitemapPath, $sitemapContent);
if (!empty($postsHtml)) file_put_contents($postsHtmlPath, $postsHtml);
if (!empty($indexHtml)) file_put_contents($indexHtmlPath, $indexHtml);

echo json_encode([
    'success' => true,
    'message' => "Synced $totalPosts posts with Sitemap, posts.html, and homepage successfully.",
    'totalPosts' => $totalPosts,
    'sitemapAdded' => $sitemapAdded,
    'postsAdded' => $postsAdded
]);
