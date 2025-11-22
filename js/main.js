document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');

    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.classList.add('logo-animated');
        });

        logo.addEventListener('mouseleave', () => {
            logo.classList.remove('logo-animated');
        });
    }

    const pageContents = document.querySelectorAll('.page-content');
    const navLinks = document.querySelectorAll('nav a');

    function showPage(hash) {
        // Default to #home if no hash is provided
        if (!hash) {
            hash = '#home';
        }

        pageContents.forEach(content => {
            if ('#' + content.id.replace('-content', '') === hash) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    }

    // Show the correct page on initial load
    showPage(window.location.hash);

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const hash = link.getAttribute('href');
            if (hash.startsWith('#')) {
                showPage(hash);
            }
        });
    });

    // Handle back/forward button navigation
    window.addEventListener('hashchange', () => {
        showPage(window.location.hash);
    });
});
