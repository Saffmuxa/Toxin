//выползание списка в дропдауне
const initDropdownHeader = (dropdownHeaderEl) => {
  //составляющие dropdownHeaderEl
  const dropdownHeaderWrap = dropdownHeaderEl.querySelector(
    ".js-header__dropdown"
  );
  const dropdownHeaderBtn = dropdownHeaderEl.querySelector(".js-header__btn");
  const dropdownHeaderMenu = dropdownHeaderEl.querySelector(".js-header__menu");
  // const dropdownArrow = dropdownHeaderEl.querySelector(".js-dropdown__input-wrap");
  // обновление значений selectNum при нажатии кнопок +-

  //открывает/закрывает дроп меню + меняет класс инпута + переворот стрелки
  const toggledropdownHeaderMenu = () => {
    dropdownHeaderMenu.classList.toggle("js-header__menu_active");
    // dropdownHeaderBtn.classList.toggle("js-header__btn_active");
    // dropdownArrow.classList.toggle("js-dropdown__arrow_active");
  };
  // dropdownHeaderWrap.addEventListener("click", toggledropdownHeaderMenu);

  //закрывает дроп меню при мисклике + меняет класс инпута + переворот стрелки
  const onClickDropdownHeaderOutside = () => {
    document.addEventListener("click", (event) => {
      if (!dropdownHeaderEl.contains(event.target)) {
        dropdownHeaderMenu.classList.remove("js-header__menu_active");
        dropdownHeaderBtn.classList.remove("js-header__btn_active");
        // dropdownArrow.classList.remove("js-dropdown__arrow_active");
      }
    });
  };
  // onClickDropdownHeaderOutside();
  const onClickDropdownHeader = () => {
    toggledropdownHeaderMenu();
    document.addEventListener("click", onClickDropdownHeaderOutside);
  };
  dropdownHeaderBtn.addEventListener("click", onClickDropdownHeader);
};
export { initDropdownHeader };
