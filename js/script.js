window.addEventListener('scroll', ()=>{
    let currentSection = '';
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (this.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('activo');
        if (link.getAttribute('href').substring(2) === currentSection) {
            link.classList.add('activo');
        }
    });
});

