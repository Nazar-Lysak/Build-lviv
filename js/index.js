const burgerMenu = document.querySelector('.menu__icon');
const menu = document.querySelector('.navigation-bar__menu');

burgerMenu.addEventListener('click', function () {
    menu.classList.toggle('active');
    menu.addEventListener('click', function () {
        menu.classList.remove('active');
    })
});

// -------------------------------------------------


document.body.onclick = function (event) {
    event = event || window.event;
        
    if (event.target.classList.contains('goods-min')) {
        let allDiv = document.querySelectorAll('.goods-img-min div');
        for (var i = 0; i < allDiv.length; i++) {
            allDiv[i].classList.remove('active');
        }
        document.getElementById('goods-max').src = event.target.src;
        console.log(event.target.parentNode);
        let parentDiv = event.target.parentElement;
        parentDiv.classList.add('active');
    } 
};

