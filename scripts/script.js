const mobileMenu = document.getElementById('mobile-menu');

mobileMenu.addEventListener('click', () => {
    const nav = document.getElementById('mobile_navbar');
    nav.classList.toggle('nav--open');
});