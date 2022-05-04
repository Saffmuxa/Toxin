//выползание списка в дропдауне
document.addEventListener("click", (e) => {
  const isDropdownButtonCheckBox = e.target.matches(
    "[data-dropdownCheckBox-button]"
  );
  if (
    !isDropdownButtonCheckBox &&
    e.target.closest("[data-dropdownCheckBox]") != null
  )
    return;

  let currentDropdownCheckBox;
  if (isDropdownButtonCheckBox) {
    currentDropdownCheckBox = e.target.closest("[data-dropdownCheckBox]");
    currentDropdownCheckBox.classList.toggle("active");
  }

  document
    .querySelectorAll("[data-dropdownCheckBox].active")
    .forEach((dropdownCheckBox) => {
      if (dropdownCheckBox === currentDropdownCheckBox) return;
      dropdownCheckBox.classList.remove("active");
    });
});
