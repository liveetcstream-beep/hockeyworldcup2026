// Pinterest Social Share & Pin Handler
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (e) => {
        // Support both .pin-save-overlay-btn (cards) and .pin-this-btn (article images)
        const pinBtn = e.target.closest('.pin-save-overlay-btn, .pin-this-btn');
        if (pinBtn) {
            e.preventDefault();
            e.stopPropagation();

            const title = pinBtn.getAttribute('data-title') || document.title;
            let img = pinBtn.getAttribute('data-image') || '';

            // If img is relative, convert to absolute URL
            if (!img) {
                const parentContainer = pinBtn.closest('.post-img-container, .card-img-wrapper, .recipe-card');
                if (parentContainer) {
                    const imgEl = parentContainer.querySelector('img');
                    if (imgEl) img = imgEl.src;
                }
            } else if (img.startsWith('/')) {
                img = window.location.origin + img;
            }

            // Always use clean canonical URL for Pinterest attribution
            const canonicalEl = document.querySelector('link[rel="canonical"]');
            const pageUrl = (canonicalEl && canonicalEl.href) ? canonicalEl.href : (window.location.origin + window.location.pathname);
            const pinUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(pageUrl)}&media=${encodeURIComponent(img)}&description=${encodeURIComponent(title)}`;
            
            // Try window.open first, or direct fallback on mobile
            const opened = window.open(pinUrl, 'pinterest-share', 'width=750,height=600,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');
            if (!opened || opened.closed || typeof opened.closed === 'undefined') {
                window.location.href = pinUrl;
            }
        }
    });
});
