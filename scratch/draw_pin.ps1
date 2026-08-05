param (
    [string]$TeamName,
    [string]$PrimaryColor = "#0f172a", # Dark background gradient start
    [string]$AccentColor = "#c00030", # Theme color for accents
    [string]$ImageFile, # Background action photo
    [string]$OutputPath
)

[void][System.Reflection.Assembly]::LoadWithPartialName("System.Drawing")

# Create a clean canvas of 1000x1500px (standard Pinterest ratio)
$bmp = New-Object System.Drawing.Bitmap(1000, 1500)
$g = [System.Drawing.Graphics]::FromImage($bmp)

# Use high-quality rendering options
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

# 1. Draw solid background gradient
$c1 = [System.Drawing.ColorTranslator]::FromHtml($PrimaryColor)
$c2 = [System.Drawing.ColorTranslator]::FromHtml("#020617") # Deep blackish blue
$rect = [System.Drawing.Rectangle]::new(0, 0, 1000, 1500)
$brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $c1, $c2, 90) # Vertical gradient
$g.FillRectangle($brush, $rect)

# 2. Draw cropped action image in the middle section
if ($ImageFile -and (Test-Path $ImageFile)) {
    $img = [System.Drawing.Image]::FromFile($ImageFile)
    
    # Place it between Y=320 and Y=1020 (height = 700px)
    $destRect = [System.Drawing.Rectangle]::new(0, 320, 1000, 700)
    
    # Center crop the source image to 10:7 aspect ratio
    $srcRatio = $img.Width / $img.Height
    $targetRatio = 1000 / 700
    if ($srcRatio -gt $targetRatio) {
        $cropHeight = $img.Height
        $cropWidth = [int]($img.Height * $targetRatio)
        $cropX = [int](($img.Width - $cropWidth) / 2)
        $cropY = 0
    } else {
        $cropWidth = $img.Width
        $cropHeight = [int]($img.Width / $targetRatio)
        $cropX = 0
        $cropY = [int](($img.Height - $cropHeight) / 2)
    }
    
    $srcRect = [System.Drawing.Rectangle]::new($cropX, $cropY, $cropWidth, $cropHeight)
    $g.DrawImage($img, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    $img.Dispose()
    
    # Apply dark overlay for text contrast and premium look
    $overlayBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(60, 2, 6, 23)) # 24% opacity
    $g.FillRectangle($overlayBrush, $destRect)
    $overlayBrush.Dispose()
}

# 3. Set Up Fonts & Brushes
$fontTitle = New-Object System.Drawing.Font("Trebuchet MS", 54, [System.Drawing.FontStyle]::Bold)
$fontBadge = New-Object System.Drawing.Font("Arial", 20, [System.Drawing.FontStyle]::Bold)
$fontFeatures = New-Object System.Drawing.Font("Arial", 22, [System.Drawing.FontStyle]::Bold)
$fontDomain = New-Object System.Drawing.Font("Trebuchet MS", 28, [System.Drawing.FontStyle]::Bold)

$whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$mutedBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(200, 255, 255, 255))
$accentColorObj = [System.Drawing.ColorTranslator]::FromHtml($AccentColor)
$accentBrush = New-Object System.Drawing.SolidBrush($accentColorObj)

# Center align text
$format = New-Object System.Drawing.StringFormat
$format.Alignment = [System.Drawing.StringAlignment]::Center

# 4. Draw Header Badge & Title
$g.DrawString("FIH HOCKEY WORLD CUP 2026", $fontBadge, $accentBrush, 500, 80, $format)
$g.DrawString(("$TeamName`nSCHEDULE"), $fontTitle, $whiteBrush, 500, 130, $format)

# 5. Draw Feature List at the bottom
$g.DrawString("- Official Match Fixtures & Pools", $fontFeatures, $mutedBrush, 500, 1070, $format)
$g.DrawString("- Live Timezone Converter (IST, CET, GMT)", $fontFeatures, $mutedBrush, 500, 1120, $format)
$g.DrawString("- Free PDF Schedule Download", $fontFeatures, $mutedBrush, 500, 1170, $format)

# 6. Draw Website Domain Banner
$domainRect = [System.Drawing.Rectangle]::new(80, 1260, 840, 120)
$g.FillRectangle($accentBrush, $domainRect)

# Draw a subtle border around domain banner
$pen = New-Object System.Drawing.Pen([System.Drawing.Color]::White, 3)
$g.DrawRectangle($pen, $domainRect)
$pen.Dispose()

$g.DrawString("hockeyworldcup2026schedule.com", $fontDomain, $whiteBrush, 500, 1300, $format)

# Clean up resources
$fontTitle.Dispose()
$fontBadge.Dispose()
$fontFeatures.Dispose()
$fontDomain.Dispose()
$whiteBrush.Dispose()
$mutedBrush.Dispose()
$accentBrush.Dispose()
$brush.Dispose()
$g.Dispose()

# Save final 1000x1500px image
$bmp.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()

Write-Host "Successfully drawn and saved Pinterest Pin for $TeamName to $OutputPath (1000x1500px)."
