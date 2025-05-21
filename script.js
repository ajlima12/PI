// JavaScript para as animações de "fade-in" e "slide-up"
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Para animar apenas uma vez
            }
        });
    }, {
        threshold: 0.1 // A animação dispara quando 10% do elemento está visível
    });

    animateElements.forEach(element => {
        observer.observe(element);
    });

    // JavaScript para o menu mobile
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuButton = document.getElementById('close-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.add('open');
        mobileMenuOverlay.style.display = 'block';
    });

    closeMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileMenuOverlay.style.display = 'none';
    });

    mobileMenuOverlay.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileMenuOverlay.style.display = 'none';
    });

    // Fechar menu mobile ao clicar em um link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            mobileMenuOverlay.style.display = 'none';
        });
    });
});
