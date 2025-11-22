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
});
