param (
    [string]$InputPath,
    [string]$OutputPath,
    [int]$Width = 1000,
    [int]$Height = 1500
)

[void][System.Reflection.Assembly]::LoadWithPartialName("System.Drawing")

$src = [System.Drawing.Image]::FromFile($InputPath)
$dest = New-Object System.Drawing.Bitmap($Width, $Height)
$g = [System.Drawing.Graphics]::FromImage($dest)

# Set high-quality scaling parameters
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

# Calculate cropping coordinates to match the 2:3 aspect ratio (1000x1500)
# Target ratio is 2/3 (Width / Height)
$targetRatio = $Width / $Height
$srcRatio = $src.Width / $src.Height

if ($srcRatio -gt $targetRatio) {
    # Source is wider than target ratio (e.g. square 1:1 vs 2:3). Crop the sides.
    $cropHeight = $src.Height
    $cropWidth = [int]($src.Height * $targetRatio)
    $cropX = [int](($src.Width - $cropWidth) / 2)
    $cropY = 0
} else {
    # Source is taller than target ratio. Crop the top/bottom.
    $cropWidth = $src.Width
    $cropHeight = [int]($src.Width / $targetRatio)
    $cropX = 0
    $cropY = [int](($src.Height - $cropHeight) / 2)
}

$destRect = [System.Drawing.Rectangle]::new(0, 0, $Width, $Height)
$srcRect = [System.Drawing.Rectangle]::new($cropX, $cropY, $cropWidth, $cropHeight)

# Draw the cropped portion of the source onto the destination canvas (high-quality resize)
$g.DrawImage($src, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

$src.Dispose()
$g.Dispose()

# Save the resulting image
$dest.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$dest.Dispose()

Write-Host "Successfully cropped and resized $InputPath to $OutputPath ($Width x $Height px) without distortion."
