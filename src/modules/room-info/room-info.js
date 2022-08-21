import { initCalendar } from "../../modules/blocks/datepicker/datepicker";
import { words } from "../word";
const wordsDeclensions = ["сутки", "суток", "суток"];

initCalendar(
  "two-dates-cal-room-info",
  "date-picker-room-info",
  "two-input",
  false
);

const initRoomInfo = (roomInfo, firstDateClass, secondDateClass, price) => {
  const peopleCount = roomInfo.querySelector(".js-dropdown__input");
  const additionalServices = roomInfo.querySelector(
    ".js-room-info__additional-services"
  );
  const textDaysRange = roomInfo.querySelector(".js-room-info__text-days");
  const applyBtn = roomInfo.querySelector(".js-datepicker-apply");
  const guestApply = roomInfo.querySelector(".js-dropdown__btn_apply");
  const dateCountTotal = roomInfo.querySelector(".js-date-total-count");
  const priceRoom = roomInfo.querySelector(".js-room-info__price-count");
  const priceRoomDate = roomInfo.querySelector(
    ".js-room-info__price-date-count"
  );
  const discountPriceField = roomInfo.querySelector(
    ".js-room-info__discount-price"
  );
  const totalPriceField = roomInfo.querySelector(".js-room-info__total-price");
  priceRoom.textContent = price.toLocaleString() + "₽";
  priceRoomDate.textContent = price.toLocaleString() + "₽";

  const daysCounter = () => {
    const firstDate = roomInfo
      .querySelector(firstDateClass)
      .value.replace(/[\s.,%]/g, " ");
    const secondDate = roomInfo
      .querySelector(secondDateClass)
      .value.replace(/[\s.,%]/g, " ");
    const t = /(\d+)(\s+)(\d+)(\s+)(\d+)/;
    const firstdDateClassReplaced = new Date(firstDate.replace(t, "$5-$3-$1"));
    const secondDateClassReplaced = new Date(secondDate.replace(t, "$5-$3-$1"));
    const days =
      (secondDateClassReplaced - firstdDateClassReplaced) /
      (60 * 60 * 24 * 1000);
    const reDate = () => {
      // daysRange.textContent = days;
      textDaysRange.textContent = words(days, wordsDeclensions);
    };
    const priceDaysCounter = () => {
      console.log(dateCountTotal.textContent);
      dateCountTotal.textContent = (price * days).toLocaleString();
    };
    reDate();
    priceDaysCounter();
    const totalPrice = () => {
      const discountPrice = discountPriceField
        ? Math.ceil(days * price * 0.05452)
        : 0;
      if (discountPriceField) {
        discountPriceField.textContent = discountPrice.toLocaleString() + "₽";
      } else "";
      additionalServices.textContent =
        (
          100 * peopleCount.value.replace(/[^0-9 ]/g, "").slice(0, 3)
        ).toLocaleString() + "₽";
      totalPriceField.textContent =
        Number(
          dateCountTotal.textContent.replace(/[\s.,%]/g, "") -
            discountPrice +
            100 * peopleCount.value.replace(/[^0-9 ]/g, "").slice(0, 3)
        ).toLocaleString() + "₽";
    };
    totalPrice();
  };

  applyBtn.addEventListener("click", daysCounter);
  guestApply.addEventListener("click", daysCounter);
  daysCounter();
};

export { initRoomInfo };
