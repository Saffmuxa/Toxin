import { initGuestDropdown } from "../../modules/blocks/dropdown-guests/dropdown-guests";
import { initRoomDropdown } from "../../modules/blocks/dropdown-rooms/dropdown-rooms";
import { initCheckBox } from "../../modules/blocks/expand-checkbox/expand-checkbox";
import { initDropdownHeader } from "../../modules/blocks/dropdown-nav/dropdown-nav";
import { initCalendar } from "../../modules/blocks/datepicker/datepicker";
import { initRangeSlider } from "../../modules/blocks/range-slider/range-slider";
import { initPagination } from "../../modules/blocks/pagination/pagination";

import "../../modules/blocks/like-button/like-button";

const guestDropdown = document.querySelectorAll(".js-main__guest-dropdown");
guestDropdown.forEach((dropdownEl) => {
  initGuestDropdown(dropdownEl);
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

const dropdownHeader = document.querySelectorAll(".js-main__header-dropdown");
dropdownHeader.forEach((dropdownHeaderEl) => {
  initDropdownHeader(dropdownHeaderEl);
});

initCalendar("two-dates-cal", "date-picker-first", "two-input");
initCalendar("range-dates-cal", "date-picker-second");
// const cardsCalendar = document.querySelectorAll(".js-main__cards-calendar");
// cardsCalendar.forEach((calendarEl) => {
//   initCalendar(calendarEl);
// });
initCalendar("cardsDate", "date-picker-cards", "", true);

initRangeSlider("js-range-slider", [5000, 10000], 100, {
  min: 0,
  max: 15500,
});

// initPagination(1, 2);
