document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.classList.add('logo-animated');
        });

        logo.addEventListener('mouseleave', () => {
            logo.classList.remove('logo-animated');
        });
    }

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
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

    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            try {
                const formData = new FormData(contactForm);
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formStatus.textContent = 'Thank you for your message!';
                    formStatus.className = 'success';
                    contactForm.reset();
                } else {
                    formStatus.textContent = 'Oops! There was a problem submitting your form.';
                    formStatus.className = 'error';
                }
            } catch (error) {
                console.error('Fetch error:', error);
                formStatus.textContent = 'Oops! A network error occurred. Please try again later.';
                formStatus.className = 'error';
            }
        });
    }
});
