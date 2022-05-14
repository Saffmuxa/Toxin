//выползание списка в дропдауне
const initCheckBox = (checkBoxEl) => {
  const formEl = checkBoxEl.querySelector(".js-checkbox__form");
  const menuEl = checkBoxEl.querySelector(".js-checkbox__menu");

  const toogleMenu = () => {
    menuEl.classList.toggle("js-checkbox__menu_active");
    formEl.classList.toggle("js-checkbox__form_active");
  };

  const outsideClick = (event) => {
    if (!checkBoxEl.contains(event.target)) {
      console.log("mimo");
      menuEl.classList.remove("js-checkbox__menu_active");
      formEl.classList.remove("js-checkbox__form_active");
    }
  };

  const onClickCheckBox = () => {
    toogleMenu();
    document.addEventListener("click", outsideClick);
  };

  formEl.addEventListener("click", onClickCheckBox);
  //   outsideClick();
};

export { initCheckBox };
