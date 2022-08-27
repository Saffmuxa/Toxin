const burger = document.querySelector(".js-header__burger");
const burgerMenu = document.querySelector(".js-header__burger-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("is-active");
  burgerMenu.classList.toggle("open-burger");
});
