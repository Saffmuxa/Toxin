//выползание списка в дропдауне
document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});
//работа счетчика в дропдауне
let btnPlus1 = document.getElementById("dropdown-oneLi-plus");
let btnPlus2 = document.getElementById("dropdown-TwoLi-plus");
let btnPlus3 = document.getElementById("dropdown-ThreeLi-plus");
let btnMinus1 = document.getElementById("dropdown-oneLi-minus");
let btnMinus2 = document.getElementById("dropdown-TwoLi-minus");
let btnMinus3 = document.getElementById("dropdown-ThreeLi-minus");
let calc1 = document.getElementById("calc1");
let calc2 = document.getElementById("calc2");
let calc3 = document.getElementById("calc3");
let maxVisitors = 6;

btnPlus1.onclick = function () {
  let countPlus = calc1.innerHTML;
  if (countPlus < maxVisitors) {
    calc1.innerHTML++;
    if (calc1.innerHTML > 0) {
      btnMinus1.className = "";
    }
    if (calc1.innerHTML == maxVisitors) {
      btnPlus1.className = "non-active";
    }
  }
};
btnPlus2.onclick = function () {
  let countPlus = calc2.innerHTML;
  if (countPlus < maxVisitors) {
    calc2.innerHTML++;
    if (calc2.innerHTML > 0) {
      btnMinus2.className = "";
    }
    if (calc2.innerHTML == maxVisitors) {
      btnPlus2.className = "non-active";
    }
  }
};
btnPlus3.onclick = function () {
  let countPlus = calc3.innerHTML;
  if (countPlus < maxVisitors) {
    calc3.innerHTML++;
    if (calc3.innerHTML > 0) {
      btnMinus3.className = "";
    }
    if (calc3.innerHTML == maxVisitors) {
      btnPlus3.className = "non-active";
    }
  }
};
btnMinus1.onclick = function () {
  let countMinus = calc1.innerHTML;
  if (countMinus > 0) {
    calc1.innerHTML--;
    if (calc1.innerHTML == 0) {
      btnMinus1.className = "non-active";
    }
    if (calc1.innerHTML < maxVisitors) {
      btnPlus1.className = "";
    }
  }
};
btnMinus2.onclick = function () {
  let countMinus = calc2.innerHTML;
  if (countMinus > 0) {
    calc2.innerHTML--;
    if (calc2.innerHTML == 0) {
      btnMinus2.className = "non-active";
    }
    if (calc2.innerHTML < maxVisitors) {
      btnPlus2.className = "";
    }
  }
};
btnMinus3.onclick = function () {
  let countMinus = calc3.innerHTML;
  if (countMinus > 0) {
    calc3.innerHTML--;
    if (calc3.innerHTML == 0) {
      btnMinus3.className = "non-active";
    }
    if (calc3.innerHTML < maxVisitors) {
      btnPlus3.className = "";
    }
  }
};

//появление кнопки очистить в дропдауне и суммирование гостей
let dropdownApply = document.getElementById("dropdown-apply");
let dropdownReset = document.getElementById("dropdown-reset");

let visitors = document.getElementById("visitors");

function dropClick() {
  let calcAll = Number(calc1.innerHTML) + Number(calc2.innerHTML);
  let babyCount = "...";
  if (Number(calc3.innerHTML) == 1) {
    babyCount = "младенец";
  }
  if (Number(calc3.innerHTML) >= 2 && Number(calc3.innerHTML) <= 4) {
    babyCount = "младенца";
  }
  if (Number(calc3.innerHTML) >= 5) {
    babyCount = "младенцев";
  }
  if (Number(calc3.innerHTML) == 0) {
    babies = "";
  } else {
    babies = ", " + String(calc3.innerHTML) + " " + babyCount;
  }
  if (calcAll == 0) {
    visitors.value = "Сколько гостей";
  }
  if (calcAll == 1) {
    visitors.value = calcAll + " гость" + babies;
  }
  if (calcAll >= 2 && calcAll <= 4) {
    visitors.value = calcAll + " гостя" + babies;
  }
  if (calcAll >= 5) {
    visitors.value = calcAll + " гостей" + babies;
  }
  if (visitors.value !== "Сколько гостей") {
    dropdownReset.style.display = "block";
  } else {
    dropdownReset.style.display = "none";
  }
}
dropdownApply.onclick = dropClick;

// очистка дропдауна
dropdownReset.onclick = function () {
  dropdownReset.style.display = "none";
  visitors.value = "Сколько гостей";
  calc1.innerHTML = calc2.innerHTML = calc3.innerHTML = 0;
  btnMinus1.className =
    btnMinus2.className =
    btnMinus3.className =
      "non-active";
  btnPlus1.className = btnPlus2.className = btnPlus3.className = "";
};
