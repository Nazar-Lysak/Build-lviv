const burgerMenu = document.querySelector('.menu__icon');
const menu = document.querySelector('.navigation-bar__menu');

burgerMenu.addEventListener('click', function () {
    menu.classList.toggle('active');
    menu.addEventListener('click', function () {
        menu.classList.remove('active');
    })
});

