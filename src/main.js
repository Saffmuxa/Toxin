import { app } from "App/app";
// import $ from "/src/templates/pages/ui/dropdown";
window.addEventListener("load", function (event) {
  console.log("Start app!");
  app();
});

// console.log(123);
// document.addEventListener("click", (e) => {
//   console.log(125);
//   const isDropdownButton = e.target.matches("[data-dropdown-input]");
//   if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;
//   let currentDropDown;
//   if (currentDropDown) {
//     currentDropDown = e.target.clocest("[data-dropdown]");
//     currentDropDown.classlist.toggle("active");
//   }
//   document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
//     if (dropdown === currentDropDown)
//       return dropdown.classList.remove("active");
//   });
// });
