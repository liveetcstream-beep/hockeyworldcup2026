// Pinterest Social Share Handler
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (e) => {
        const pinBtn = e.target.closest('.pin-save-overlay-btn');
        if (pinBtn) {
            e.preventDefault();
            e.stopPropagation();

            const title = pinBtn.getAttribute('data-title') || document.title;
            const img = pinBtn.getAttribute('data-image') || '';
            const pageUrl = window.location.href;

            const pinUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(pageUrl)}&media=${encodeURIComponent(img)}&description=${encodeURIComponent(title)}`;
            
            window.open(pinUrl, 'pinterest-share', 'width=750,height=600,toolbar=no,menubar=no');
        }
    });
});
