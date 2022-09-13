import { initDropdownHeader } from "../../modules/blocks/dropdown-nav/dropdown-nav";
import { initGuestDropdown } from "../../modules/blocks/dropdown-guests/dropdown-guests";
import { initCalendar } from "../../modules/blocks/datepicker/datepicker";
import "../../modules/blocks/like-button/like-button";
import { initRoomInfo } from "../../modules/room-info/room-info";
import { DoughnutChart } from "../../modules/blocks/chart/chart";
import "../../modules/header/header";
const pieChartElements = document.querySelectorAll(".js-doughnut-chart__item");
pieChartElements.forEach((element) => new DoughnutChart(element));

// import "./chart1";
const dropdownHeader = document.querySelectorAll(".js-main__header-dropdown");
dropdownHeader.forEach((dropdownHeaderEl) => {
  initDropdownHeader(dropdownHeaderEl);
});
const guestDropdown = document.querySelectorAll(".js-main__guest-dropdown");
guestDropdown.forEach((dropdownEl) => {
  initGuestDropdown(dropdownEl);
});
const calendarInput = document.querySelectorAll(".js-calendar__input");
const guestsDropBtns = guestDropdown[0].querySelectorAll(
  ".js-select__btn-plus"
);

initCalendar("two-dates-cal-room-info", "date-picker-room-info", "two-input");
let dateInfo = sessionStorage.getItem("date").split(",");
let guestsInfo = sessionStorage.getItem("guests").split(",");
console.log(
  dateInfo,
  guestsInfo,
  calendarInput[0].getElementsByTagName("input")[0].value
);

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
calendarInput[0].getElementsByTagName("input")[0].value = dateInfo[0];
calendarInput[1].getElementsByTagName("input")[0].value = dateInfo[1];
const roomInfoCard = document.querySelectorAll(".js-main__room-info");
roomInfoCard.forEach((roomInfo, firstDateClass, secondDateClass, price) => {
  initRoomInfo(
    roomInfo,
    ".js-left-data-room-info",
    ".js-right-data-room-info",
    9990
  );
});
