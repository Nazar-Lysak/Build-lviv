const burgerMenu = document.querySelector(".menu__icon");
const menu = document.querySelector(".navigation-bar__menu");
const html = document.querySelector("HTML");

burgerMenu.addEventListener("click", function () {
  menu.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  html.classList.toggle("overflow");

  menu.addEventListener("click", function () {
    menu.classList.remove("active");
    burgerMenu.classList.remove("active");
    html.classList.remove("overflow");
  });
});
