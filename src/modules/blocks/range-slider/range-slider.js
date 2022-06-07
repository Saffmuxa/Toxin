import noUiSlider from "nouislider";
import wNumb from "wnumb";

const initRangeSlider = (id, start, step, range) => {
  const sliderContainer = document.getElementById(id);
  const rangeSliderEl = sliderContainer.querySelector(
    ".js-range-slider__slider"
  );
  noUiSlider.create(rangeSliderEl, {
    start,
    connect: true,
    step,
    range,

    format: wNumb({
      decimals: 0,
      thousand: " ",
      suffix: "₽",
    }),
  });

  const rangeSliderValue = sliderContainer.querySelector(
    ".js-range-slider__price"
  );
  rangeSliderEl.noUiSlider.on("update", function (values) {
    const valuesString = values.join(" - ");
    rangeSliderValue.textContent = valuesString;
  });
};

export { initRangeSlider };
