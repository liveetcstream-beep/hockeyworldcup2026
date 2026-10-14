/**
 * Lazy Loading Utility for Cozy Plate Recipes
 * Optimizes image loading, improves Core Web Vitals (LCP/FID/CLS), and ensures zero broken scripts.
 */
(function() {
    'use strict';

    function initLazyLoading() {
        var lazyImages = document.querySelectorAll('img[loading="lazy"], img[data-src]');
        if (!lazyImages || !lazyImages.length) return;

        if ('IntersectionObserver' in window) {
            var imageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        var img = entry.target;
                        if (img.dataset && img.dataset.src) {
                            img.src = img.dataset.src;
                            if (img.dataset.srcset) {
                                img.srcset = img.dataset.srcset;
                            }
                            img.removeAttribute('data-src');
                            img.removeAttribute('data-srcset');
                        }
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '200px 0px',
                threshold: 0.01
            });

            lazyImages.forEach(function(img) {
                if (img.dataset && img.dataset.src) {
                    imageObserver.observe(img);
                } else {
                    if (img.complete) {
                        img.classList.add('loaded');
                    } else {
                        img.addEventListener('load', function() {
                            img.classList.add('loaded');
                        }, { once: true });
                    }
                }
            });
        } else {
            // Fallback for older browsers
            lazyImages.forEach(function(img) {
                if (img.dataset && img.dataset.src) {
                    img.src = img.dataset.src;
                }
                img.classList.add('loaded');
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLazyLoading);
    } else {
        initLazyLoading();
    }
})();
