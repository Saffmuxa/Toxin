import { initDropdownHeader } from "../../modules/blocks/dropdown-nav/dropdown-nav";
import { initGuestDropdown } from "../../modules/blocks/dropdown-guests/dropdown-guests";
import { initCalendar } from "../../modules/blocks/datepicker/datepicker";
import { initRangeSlider } from "../../modules/blocks/range-slider/range-slider";
import { initRoomDropdown } from "../../modules/blocks/dropdown-rooms/dropdown-rooms";
import { initCheckBox } from "../../modules/blocks/expand-checkbox/expand-checkbox";
import { initSliderCard } from "../../modules/slider-card/slider-card";
import { initPagination } from "../../modules/blocks/pagination/pagination";
import "../../modules/header/header";

const dropdownHeader = document.querySelectorAll(".js-main__header-dropdown");
dropdownHeader.forEach((dropdownHeaderEl) => {
  initDropdownHeader(dropdownHeaderEl);
});
const guestDropdown = document.querySelectorAll(".js-main__guest-dropdown");
guestDropdown.forEach((dropdownEl) => {
  initGuestDropdown(dropdownEl);
});
const calendarInput = document.querySelector(".js-calendar__input");
const guestsDropBtns = guestDropdown[0].querySelectorAll(
  ".js-select__btn-plus"
);

initCalendar("range-dates-cal", "date-picker-second");

initRangeSlider("js-range-slider", [5000, 10000], 100, {
  min: 0,
  max: 15500,
});
const roomDropdown = document.querySelectorAll(".js-main__rooms-dropdown");
roomDropdown.forEach((element) => {
  initRoomDropdown(element);
});
const checkBoxDropdown = document.querySelectorAll(
  ".js-main__checkBox-dropdown"
);
checkBoxDropdown.forEach((checkBoxEl) => {
  initCheckBox(checkBoxEl);
});
let dateInfo = sessionStorage.getItem("date").split(",");
let guestsInfo = sessionStorage.getItem("guests").split(",");
let dateArr = [];
let month;
dateInfo.forEach((element) => {
  switch (element.slice(3, 5)) {
    case "01":
      month = " янв";
      break;
    case "02":
      month = " февр";
      break;
    case "03":
      month = " мар";
      break;
    case "04":
      month = " апр";
      break;
    case "05":
      month = " мая";
      break;
    case "06":
      month = " июн";
      break;
    case "07":
      month = " июл";
      break;
    case "08":
      month = " авг";
      break;
    case "09":
      month = " сент";
      break;
    case "10":
      month = " окт";
      break;
    case "11":
      month = " нояб";
      break;
    case "12":
      month = " дек";
      break;
  }
  dateArr.push(element.slice(0, -8) + month);
  // dateArr[0] = dateArr[0].slice(0, -3) + month;
});
calendarInput.getElementsByTagName("input")[0].value =
  dateArr[0] + " - " + dateArr[1];
// console.log(guestsInfo[1]);
console.log(guestsInfo);

let i = 1;
while (i <= guestsInfo[0]) {
  guestsDropBtns[0].click();
  i++;
  console.log(i);
}
let ii = 1;
while (ii <= guestsInfo[1]) {
  guestsDropBtns[1].click();
  ii++;
}
let iii = 1;
while (iii <= guestsInfo[2]) {
  guestsDropBtns[2].click();
  iii++;
}

// guestsDropBtns[0].click();
// console.log(guestsDropBtns[0]);

// sessionStorage.setItem("guests", guestsArr);
const sliderCard = document.querySelectorAll(".js-slider-card");
sliderCard.forEach((sliderCard) => {
  initSliderCard(sliderCard);
});
const filterMenu = document.querySelector(".js-search-room__options");
const filterMenuBtn = document.querySelector(".js-search-room__filter-btn");
const filterMenuClose = document.querySelector(
  ".js-search-room__close-options-btn"
);
// const header = document.getElementsByTagName("header");
const body = document.getElementsByTagName("body");
filterMenuBtn.addEventListener("click", () => {
  filterMenu.classList.toggle("filter-menu__open");
  setTimeout(() => filterMenu.classList.toggle("is-active"), 30);
  // setTimeout(() => header[0].classList.toggle("header-fixed"), 30);
  body[0].classList.toggle("overflow");
});
filterMenuClose.addEventListener("click", () => {
  filterMenu.classList.toggle("is-active");
  setTimeout(() => filterMenu.classList.toggle("filter-menu__open"), 300);
  body[0].classList.toggle("overflow");
  // header[0].classList.toggle("header-fixed");
});
// if (burgerMenu.classList.contains("open-burger")) {
//   burgerMenu.classList.toggle("open-burger__slide");
//   burger.classList.toggle("is-active");
//   setTimeout(() => burgerMenu.classList.toggle("open-burger"), 300);
// } else {
//   burger.classList.toggle("is-active");
//   burgerMenu.classList.toggle("open-burger");
//   setTimeout(() => burgerMenu.classList.toggle("open-burger__slide"), 30);
// }
