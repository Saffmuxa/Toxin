import { initDropdownHeader } from "../../modules/blocks/dropdown-nav/dropdown-nav";
import { initGuestDropdown } from "../../modules/blocks/dropdown-guests/dropdown-guests";
import { initCalendar } from "../../modules/blocks/datepicker/datepicker";
// import { initRangeSlider } from "../../modules/blocks/dropdown-guests";

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
