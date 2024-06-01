const hamburgerMenu = document.querySelector('.hamburger-menu');
const logo = document.querySelector('.si');
const navLinks = document.querySelector('.nav__links');

hamburgerMenu.addEventListener('click', (e) => {
    navLinks.classList.toggle('active');

    console.log(e.target.id);
});


logo.addEventListener('click', (e) => {
    console.log(e.target.id);
});