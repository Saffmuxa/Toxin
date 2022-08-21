import Inputmask from "inputmask";

const maskedInputEl = document.querySelectorAll(".js-masked-text__input");
var im = new Inputmask({
  placeholder: "ДД.ММ.ГГГГ",
  alias: "datetime",
  inputFormat: "dd.mm.yyyy",
  outputFormat: "ddmmyyyy",
}).mask(maskedInputEl);
export { maskedInputEl };
