// Main Website JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle & Search Integration
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = navMenu.classList.toggle('open');
            mobileToggle.classList.toggle('active', isOpen);
            mobileToggle.setAttribute('aria-expanded', isOpen);
            mobileToggle.innerHTML = isOpen ? '&times;' : '&#9776;';
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && e.target !== mobileToggle) {
                navMenu.classList.remove('open');
                mobileToggle.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.innerHTML = '&#9776;';
            }
        });

        // Close menu on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
                mobileToggle.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.innerHTML = '&#9776;';
            }
        });
    }

    // Category Filtering & Pagination System
    const filterChips = document.querySelectorAll('.category-chip');
    const recipeCards = Array.from(document.querySelectorAll('.recipe-card'));
    // Ensure pagination container exists (either in HTML or created dynamically)
    let paginationContainer = document.getElementById('paginationControls');
    if (!paginationContainer) {
        const grid = document.getElementById('allPostsGrid');
        if (grid && grid.parentNode) {
            paginationContainer = document.createElement('div');
            paginationContainer.id = 'paginationControls';
            paginationContainer.className = 'pagination-container';
            grid.parentNode.appendChild(paginationContainer);
        }
    }

    const POSTS_PER_PAGE = 15;
    let currentPage = 1;
    let currentCategory = 'all';
    let searchQuery = '';

    function getFilteredCards() {
        return recipeCards.filter(card => {
            const cardCat = card.getAttribute('data-category') || '';
            const matchesCat = (currentCategory === 'all' || cardCat === currentCategory || cardCat.includes(currentCategory));
            const cardText = card.textContent.toLowerCase();
            const matchesSearch = !searchQuery || cardText.includes(searchQuery);
            return matchesCat && matchesSearch;
        });
    }

    function renderPagination() {
        if (!paginationContainer) return;

        const filtered = getFilteredCards();
        const totalPosts = filtered.length;
        const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE) || 1;

        if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        if (currentPage < 1) {
            currentPage = 1;
        }

        // 1. Hide all cards, then show current page slice
        recipeCards.forEach(card => {
            card.style.display = 'none';
        });

        const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
        const endIndex = startIndex + POSTS_PER_PAGE;
        const currentSlice = filtered.slice(startIndex, endIndex);

        currentSlice.forEach(card => {
            card.style.display = 'flex';
        });

        // 2. Build pagination UI
        if (totalPages <= 1) {
            paginationContainer.innerHTML = '';
            return;
        }

        let html = '';

        // Previous button
        html += `<button class="pagination-btn pagination-prev" ${currentPage === 1 ? 'disabled' : ''} data-page="${currentPage - 1}">❮ Prev</button>`;

        // Page numbers logic (sliding window)
        const pagesToShow = [];
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pagesToShow.push(i);
        } else {
            pagesToShow.push(1);
            if (currentPage > 3) pagesToShow.push('...');
            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);
            for (let i = start; i <= end; i++) {
                if (!pagesToShow.includes(i)) pagesToShow.push(i);
            }
            if (currentPage < totalPages - 2) pagesToShow.push('...');
            if (!pagesToShow.includes(totalPages)) pagesToShow.push(totalPages);
        }

        pagesToShow.forEach(p => {
            if (p === '...') {
                html += `<span class="pagination-ellipsis">...</span>`;
            } else {
                html += `<button class="pagination-btn ${p === currentPage ? 'active' : ''}" data-page="${p}">${p}</button>`;
            }
        });

        // Next button
        html += `<button class="pagination-btn pagination-next" ${currentPage === totalPages ? 'disabled' : ''} data-page="${currentPage + 1}">Next ❯</button>`;

        // Info text
        const showingFrom = totalPosts === 0 ? 0 : startIndex + 1;
        const showingTo = Math.min(endIndex, totalPosts);
        html += `<div class="pagination-info">Showing ${showingFrom}–${showingTo} of ${totalPosts} delicious recipes (Page ${currentPage} of ${totalPages})</div>`;

        paginationContainer.innerHTML = html;

        // Attach event listeners to pagination buttons
        paginationContainer.querySelectorAll('.pagination-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.disabled) return;
                const targetPage = parseInt(btn.getAttribute('data-page'), 10);
                if (targetPage && targetPage !== currentPage) {
                    currentPage = targetPage;
                    renderPagination();

                    // Smooth scroll to top of recipes section
                    const recipesSection = document.querySelector('.recipes-section');
                    if (recipesSection) {
                        recipesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            });
        });
    }

    // Category click handler
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');

            currentCategory = chip.getAttribute('data-category') || 'all';
            currentPage = 1; // Reset to page 1 on filter
            renderPagination();
        });
    });

    // Search Modal
    const searchBtn = document.querySelector('.search-toggle-btn');
    const searchModal = document.querySelector('.search-modal');
    const closeSearchBtn = document.querySelector('.close-search-btn');
    const searchInput = document.querySelector('#siteSearchInput');

    if (searchBtn && searchModal) {
        searchBtn.addEventListener('click', () => {
            searchModal.classList.add('active');
            if (searchInput) searchInput.focus();
        });

        if (closeSearchBtn) {
            closeSearchBtn.addEventListener('click', () => {
                searchModal.classList.remove('active');
            });
        }

        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) {
                searchModal.classList.remove('active');
            }
        });

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value.toLowerCase().trim();
                currentPage = 1; // Reset to page 1 on search
                renderPagination();
            });
        }
    }

    // Initial render of pagination
    renderPagination();

    // Mobile Search Input inside Navigation Menu
    const mobileSearchInput = document.querySelector('.mobile-menu-search-input');
    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            currentPage = 1;
            renderPagination();
        });
        mobileSearchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                // If not on homepage or /posts, redirect to /posts with search
                if (!document.getElementById('allPostsGrid')) {
                    window.location.href = '/posts?q=' + encodeURIComponent(e.target.value);
                } else {
                    if (navMenu) {
                        navMenu.classList.remove('open');
                        if (mobileToggle) {
                            mobileToggle.classList.remove('active');
                            mobileToggle.innerHTML = '&#9776;';
                        }
                    }
                }
            }
        });
    }

});
