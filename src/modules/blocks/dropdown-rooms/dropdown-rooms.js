import { initDropdown } from "../dropdown/dropdown";
import { words } from "../../word";

const initRoomDropdown = (dropdownEl) => {
  const wordsDeclensions = [
    ["спальня", "спальни", "спален"],
    ["кровать", "кровати", "кроватей"],
    ["ванная комната", "ванных комнаты", "ванных комнат"],
  ];
  //меняем окончания комнат в зависимости от их количества
  const onChangeTextValue = (values) => {
    const room1Count = values[0];
    const room2Count = values[1];
    const room3Count = values[2];
    const textArray = [room1Count, room2Count, room3Count].map((count, index) =>
      words(count, wordsDeclensions[index])
    );
    //убираем пустые элементы, чтобы не оторбажать запятую
    const removedEmptyText = textArray.filter((item) => item !== "");
    //при нескольких элементах - разделяем запятой
    const formatedText = removedEmptyText.join(", ");
    return formatedText;
  };

  initDropdown({ dropdownEl, onChangeTextValue });
};

export { initRoomDropdown };
