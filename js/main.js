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

    function showPage(hash) {
        // Default to #home if no hash or an empty hash is provided
        if (!hash || hash === '#') {
            hash = '#home';
        }

        const targetId = hash.substring(1) + '-content';
        let targetContent = document.getElementById(targetId);

        // If the target content doesn't exist, default to home
        if (!targetContent) {
            targetContent = document.getElementById('home-content');
        }

        pageContents.forEach(content => {
            if (content === targetContent) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    }

    // Show the correct page on initial load
    showPage(window.location.hash);

    // Handle back/forward button navigation
    window.addEventListener('hashchange', () => {
        showPage(window.location.hash);
    });
});
