import { initGuestDropdown } from "../../modules/blocks/dropdown-guests/dropdown-guests";
import { initRoomDropdown } from "../../modules/blocks/dropdown-rooms/dropdown-rooms";
import { initCheckBox } from "../../modules/blocks/expand-checkbox/expand-checkbox";
import { initDropdownHeader } from "../../modules/blocks/dropdown-nav/dropdown-nav";
import { initCalendar } from "../../modules/blocks/datepicker/datepicker";
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

initCalendar("two-dates", "date-picker-first", "two-input");
initCalendar("range-dates", "date-picker-second");
// initLikeBtn();
// const likeBtn = document.querySelectorAll(".js-main__like");
// likeBtn.forEach((lk) => {
//   initLikeBtn(lk);
// });
