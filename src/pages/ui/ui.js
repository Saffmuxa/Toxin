import { initGuestDropdown } from "../../modules/blocks/dropdown-guests/dropdown-guests";
import { initRoomDropdown } from "../../modules/blocks/dropdown-rooms/dropdown-rooms";
import { initCheckBox } from "../../modules/blocks/expand-checkbox/expand-checkbox";
import { initDropdownHeader } from "../../modules/blocks/dropdown-nav/dropdown-nav";

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
