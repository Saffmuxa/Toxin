//выползание списка в дропдауне
const initDropdown = ({ dropdownEl, onChangeTextValue = null }) => {
  //составляющие dropdownEl
  const dropdownInputWrapper = dropdownEl.querySelector(
    ".js-dropdown__input-wrap"
  );
  const dropdownInput = dropdownEl.querySelector(".js-dropdown__input");
  const dropdownMenu = dropdownEl.querySelector(".js-dropdown__menu");
  const selectNum = dropdownEl.querySelectorAll(".js-select__input");
  const minusBtn = dropdownEl.querySelectorAll(".js-select__btn-minus");
  const plusBtn = dropdownEl.querySelectorAll(".js-select__btn-plus");
  const resetBtn = dropdownEl.querySelector(".js-dropdown__btn_reset");
  const applyBtn = dropdownEl.querySelector(".js-dropdown__btn_apply");
  const dropdownArrow = dropdownEl.querySelector(".js-dropdown__input-wrap");
  // обновление значений selectNum при нажатии кнопок +-
  const state = {};
  const setState = () => {
    state.values = [...selectNum].map((counter) => Number(counter.value));
    state.totalCounts = state.values.reduce(
      (prev, current) => prev + current,
      0
    );
  };

  //открывает/закрывает дроп меню + меняет класс инпута + переворот стрелки
  const toggleDropdownMenu = () => {
    dropdownMenu.classList.toggle("js-dropdown__menu_active");
    dropdownInput.classList.toggle("js-dropdown__input_active");
    dropdownArrow.classList.toggle("js-dropdown__arrow_active");
  };
  applyBtn?.addEventListener("click", toggleDropdownMenu);
  // dropdownInputWrapper.addEventListener("click", toggleDropdownMenu);

  //закрывает дроп меню при мисклике + меняет класс инпута + переворот стрелки
  const onClickDropdownOutside = () => {
    document.addEventListener("click", (event) => {
      if (!dropdownEl.contains(event.target)) {
        dropdownMenu.classList.remove("js-dropdown__menu_active");
        dropdownInput.classList.remove("js-dropdown__input_active");
        dropdownArrow.classList.remove("js-dropdown__arrow_active");
      }
    });
  };
  // onClickDropdownOutside();

  //кнопка Очистить
  const onClickResetBtn = () => {
    [...selectNum].forEach((counter) => {
      counter.value = 0;
    });
    setState();
    update();
  };
  resetBtn?.addEventListener("click", onClickResetBtn);

  //кнопки -
  const onClickMinusBtn = ({ target }) => {
    const counterEl = target.nextElementSibling;
    counterEl.stepDown();
    update();
  };
  minusBtn.forEach((btn) => {
    btn.addEventListener("click", onClickMinusBtn);
  });
  //кнопки +
  const onClickPlusBtn = ({ target }) => {
    const counterEl = target.previousElementSibling;
    counterEl.stepUp();
    update();
  };
  plusBtn.forEach((btn) => {
    btn.addEventListener("click", onClickPlusBtn);
  });

  const updateInputValue = () => {
    if (state.totalCounts === 0) {
      dropdownInput.value = "";
    } else if (onChangeTextValue) {
      const inputValue = onChangeTextValue(state.values);
      dropdownInput.value = inputValue;
    }
  };

  //появление кнопки Reset при значении input более 0
  const updateResetBtn = () => {
    if (state.totalCounts === 0) {
      resetBtn?.classList.add("js-dropdown__btn_hidden");
    } else {
      resetBtn?.classList.remove("js-dropdown__btn_hidden");
    }
  };

  //меняет стили кнопок +/- при достижении 0 или максимума
  const update = () => {
    setState();
    state.values.forEach((value, index) => {
      const minusButton = selectNum[index].previousElementSibling;
      if (value === 0) {
        minusButton.setAttribute("disabled", true);
      } else if (value === 1) {
        minusButton.removeAttribute("disabled");
      }
      const plusButton = selectNum[index].nextElementSibling;
      if (value == selectNum[index].max) {
        plusButton.setAttribute("disabled", true);
      } else if (value < selectNum[index].max) {
        plusButton.removeAttribute("disabled");
      }
    });
    updateInputValue();
    updateResetBtn();
  };

  update();

  const onClickDropdown = () => {
    toggleDropdownMenu();
    document.addEventListener("click", onClickDropdownOutside);
  };
  dropdownInputWrapper.addEventListener("click", onClickDropdown);
};
export { initDropdown };
