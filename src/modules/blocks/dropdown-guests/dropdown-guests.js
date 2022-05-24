import { initDropdown } from "../dropdown/dropdown";
import { words } from "../../word";

// console.log(initDropdown);
const initGuestDropdown = (dropdownEl) => {
  const wordsDeclensions = [
    ["гость", "гостя", "гостей"],
    ["младенец", "младенца", "младенцев"],
  ];
  //меняем окончания гостей в зависимости от их количества
  const onChangeTextValue = (values) => {
    console.log(values);
    const guestCount = values[0] + values[1];
    const babyCount = values[2];
    const textArray = [guestCount, babyCount].map((count, index) =>
      words(count, wordsDeclensions[index])
    );
    // if (guestCount === 0) {
    //   alert("Младенцы не могут быть размещены без взрослых");
    // }
    //убираем пустые элементы, чтобы не оторбажать запятую
    const removedEmptyText = textArray.filter((item) => item !== "");
    //при нескольких элементах - разделяем запятой
    const formatedText = removedEmptyText.join(", ");
    return formatedText;
  };
  initDropdown({ dropdownEl, onChangeTextValue });
};
// applyBtn?.addEventListener("click", babyesDetect);
export { initGuestDropdown };
