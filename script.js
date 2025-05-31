// Espera o DOM carregar para garantir que todos os elementos estão acessíveis
document.addEventListener('DOMContentLoaded', () => {
    // 1. ScrollReveal para seções
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().reveal('section', {
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            origin: 'bottom',
            interval: 200
        });
    }

    // 2. Cria e estiliza o botão de "voltar ao topo"
    const topBtn = document.createElement('button');
    topBtn.innerText = '↑';
    topBtn.classList.add('top-btn');
    document.body.appendChild(topBtn);

    // 3. Scroll suave ao topo
    topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 4. Mostrar/ocultar botão ao rolar a página
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            topBtn.classList.add('show');
        } else {
            topBtn.classList.remove('show');
        }
    });

    // 5. Menu mobile toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Fecha o menu quando um link for clicado
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // 6. ScrollSpy — adiciona destaque ao link da seção atual
    const sections = document.querySelectorAll('section');
    const navAnchors = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 80;
            if (window.pageYOffset >= sectionTop) {
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

// função do butão de Enviar e-mail
document.getElementById('enviar-email').addEventListener('click', function (e) {
    e.preventDefault();

    const emailDestino = 'vitornegraorocha@gmail.com';
    const assunto = encodeURIComponent('Contato via Portfólio');
    const corpo = encodeURIComponent('Olá Vitor, estou entrando em contato pelo seu portfólio!');

    const mailtoLink = `mailto:${emailDestino}?subject=${assunto}&body=${corpo}`;
    window.location.href = mailtoLink;
});
