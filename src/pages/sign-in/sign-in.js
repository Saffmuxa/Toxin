import { initDropdownHeader } from "../../modules/blocks/dropdown-nav/dropdown-nav";
import { initGuestDropdown } from "../../modules/blocks/dropdown-guests/dropdown-guests";
import { initCalendar } from "../../modules/blocks/datepicker/datepicker";
import "../../modules/header/header";

const submitBtn = document.querySelector(".js-register-sbmt-button");
const form = document.querySelectorAll(".js-select__input");

const calendarInput = document.querySelectorAll(".js-calendar__input");

console.log(calendarInput);
const dropdownHeader = document.querySelectorAll(".js-main__header-dropdown");
dropdownHeader.forEach((dropdownHeaderEl) => {
  initDropdownHeader(dropdownHeaderEl);
});
const guestDropdown = document.querySelectorAll(".js-main__guest-dropdown");
guestDropdown.forEach((dropdownEl) => {
  initGuestDropdown(dropdownEl);
});
initCalendar("cards-two-dates-cal", "date-picker-cards-first", "two-input");
let guestsArr = [];
let dateArr = [];
let inputDate;
submitBtn.addEventListener("click", () => {
  sessionStorage.clear();
  guestsArr = [];
  dateArr = [];
  form.forEach((el) => {
    guestsArr.push(el.value);
  });
  // console.log(guestsArr);
  calendarInput.forEach((el) => {
    inputDate = el.querySelectorAll("input");
    inputDate.forEach((el) => {
      dateArr.push(el.value);
    });
  });
  console.log(dateArr[0] == "");
  if (guestsArr[0] == 0 || dateArr[0] == "" || dateArr[1] == "") {
    alert("Заполните форму");
  } else {
    sessionStorage.setItem("date", dateArr);
    sessionStorage.setItem("guests", guestsArr);
    console.log(sessionStorage);
    window.location.href = "/search-room.html";
  }

  // const oopp = document.querySelector(".masked-text__input");
  // console.log(oopp.value);
  // let formFields = form.elements;
  // Array.prototype.forEach.call(formFields, (element) => {
  //   //   if (element.name == "name") {
  //   //     namesArr.push(element.value);
  //   //   }

  //   //   if (element.name == "time") {
  //     sessionStorage.setItem("timer", element.value);
  //   //   }
  //   console.log(element);
  // });
  // // sessionStorage.setItem("names", JSON.stringify(namesArr));
  // console.log(namesArr);
});
