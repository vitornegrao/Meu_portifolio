document.addEventListener('DOMContentLoaded', () => {
    // ScrollReveal
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().reveal('section', {
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            origin: 'bottom',
            interval: 200
        });
    }

    // Botão "voltar ao topo"
    const topBtn = document.createElement('button');
    topBtn.innerText = '↑';
    topBtn.classList.add('top-btn');
    document.body.appendChild(topBtn);

    topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            topBtn.classList.add('show');
        } else {
            topBtn.classList.remove('show');
        }
    });

    // Toggle menu mobile
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Scrollspy
    const sections = document.querySelectorAll('section');
    const navAnchors = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navAnchors.forEach(anchor => {
            anchor.classList.remove('active');
            if (anchor.getAttribute('href') === '#' + currentSection) {
                anchor.classList.add('active');
            }
        });
    });

});
