const burger = document.querySelector(".js-header__burger");
const burgerMenu = document.querySelector(".js-header__burger-menu");

burger.addEventListener("click", () => {
  if (burgerMenu.classList.contains("open-burger")) {
    burgerMenu.classList.toggle("open-burger__slide");
    burger.classList.toggle("is-active");
    setTimeout(() => burgerMenu.classList.toggle("open-burger"), 300);
  } else {
    burger.classList.toggle("is-active");
    burgerMenu.classList.toggle("open-burger");
    setTimeout(() => burgerMenu.classList.toggle("open-burger__slide"), 30);
  }
});
