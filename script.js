// Kafe Konsept - JavaScript Funksionallığı

document.addEventListener('DOMContentLoaded', () => {
    console.log('Sayt yükləndi və hazırdır!');

    // Scroll-reveal animasiyaları
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // Page Transitions
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const href = link.getAttribute('href');
            document.body.style.transition = 'opacity 0.5s ease-out';
            document.body.style.opacity = '0';
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
});