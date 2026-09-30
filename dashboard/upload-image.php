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

if (!isset($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
    $errCode = isset($_FILES['image']) ? $_FILES['image']['error'] : 'no_file';
    echo json_encode(['success' => false, 'error' => 'No image uploaded or upload error code: ' . $errCode]);
    exit;
}

$file = $_FILES['image'];
$origName = $file['name'];
$ext = strtolower(pathinfo($origName, PATHINFO_EXTENSION));

$allowed = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'avif'];
if (!in_array($ext, $allowed)) {
    echo json_encode(['success' => false, 'error' => 'Invalid file extension: ' . $ext]);
    exit;
}

// Target folder: ../assets/images/
$targetDir = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'assets' . DIRECTORY_SEPARATOR . 'images';
if (!is_dir($targetDir)) {
    mkdir($targetDir, 0777, true);
}

// Create clean safe slug filename
$nameWithoutExt = pathinfo($origName, PATHINFO_FILENAME);
$cleanSlug = preg_replace('/[^a-z0-9]+/i', '-', strtolower($nameWithoutExt));
$cleanSlug = trim($cleanSlug, '-');
if (empty($cleanSlug)) {
    $cleanSlug = 'home-decor-' . time();
}

$filename = $cleanSlug . '.' . $ext;
$targetPath = $targetDir . DIRECTORY_SEPARATOR . $filename;

// If duplicate, append unique id
if (file_exists($targetPath)) {
    $filename = $cleanSlug . '-' . substr(uniqid(), -5) . '.' . $ext;
    $targetPath = $targetDir . DIRECTORY_SEPARATOR . $filename;
}

if (move_uploaded_file($file['tmp_name'], $targetPath)) {
    echo json_encode([
        'success' => true,
        'url' => 'assets/images/' . $filename,
        'filename' => $filename,
        'originalName' => $origName
    ]);
} else {
    echo json_encode(['success' => false, 'error' => 'Failed to move uploaded file to target directory']);
}
