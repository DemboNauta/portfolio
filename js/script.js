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

document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelectorAll('.nav-link').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            let targetName = this.getAttribute('href').substr(1);
            console.log(targetName);
            var targetElement = document.querySelector(targetName);
            console.log(targetElement);
            var offset = targetElement.getBoundingClientRect().top + window.scrollY;
    
            window.scrollTo({
                top: offset - document.getElementById('header').offsetHeight,
                behavior: 'smooth'
            });
        });
    });
    
})
