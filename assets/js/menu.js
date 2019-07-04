const menuLogo = document.querySelector('.menu-logo');
const menuBtn = document.querySelector('.menu-mobile');

menuLogo.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        e.preventDefault();
        menuBtn.classList.toggle('is-active');
        menuLogo.classList.toggle('is-active');
    }
});
