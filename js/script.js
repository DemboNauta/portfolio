window.addEventListener('DOMContentLoaded', ()=>{
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('activo');
        link.addEventListener('click', ()=>{
            if (window.innerWidth < 576) {
                const menuToggle = document.getElementById('menuButton');
                const bsCollapse = new bootstrap.Collapse(document.getElementById('navbarNav'), {toggle: false});
                bsCollapse.toggle();
            }
        })
    }); 
})
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
    if(window.innerWidth>576){
        navLinks.forEach(link => {
            link.classList.remove('activo');
            if (link.getAttribute('href').substring(2) === currentSection) {
                link.classList.add('activo');
            }
        });
    }else{
        navLinks.forEach(link => {
            link.classList.remove('activo');
        });
    }
});

document.addEventListener("DOMContentLoaded", ()=>{
    
    document.querySelectorAll('.nav-link').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            let targetName = this.getAttribute('href').substr(1);
            var targetElement = document.querySelector(targetName);
            var offset = targetElement.getBoundingClientRect().top + window.scrollY;
            if(window.innerWidth>576){
                window.scrollTo({
                    top: (offset-40) - document.getElementById('header').offsetHeight,
                    behavior: 'smooth'
                });
            }else{
                window.scrollTo({
                    top: (offset+100) - document.getElementById('header').offsetHeight,
                    behavior: 'smooth'
                });
            }
            
        });
    });
    
})
