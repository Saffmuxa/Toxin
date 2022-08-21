const initSliderCard = (sliderCard) => {
  const btnNext = sliderCard.querySelector(".js-slider-card__btn-next");
  const btnPrev = sliderCard.querySelector(".js-slider-card__btn-prev");
  const imgWrap = sliderCard.querySelector(".js-slider-card__img-wrapper");
  const img = sliderCard.querySelectorAll(".js-slider-card__img");
  const pagImg = sliderCard.querySelectorAll(
    ".js-slider-card__pagination_bullet"
  );
  const imgClick = sliderCard.querySelectorAll(
    ".js-slider-card__img_clickable"
  );
  imgClick.forEach((el, index) => {
    el.addEventListener("click", () => {
      window.location.href = "/room" + (index + 1) + ".html";
    });
  });
  const width = 270;
  console.log(img.length);

  let offset = 0;
  let pic = 1;
  console.log(btnNext);

  btnNext.addEventListener("click", () => {
    if (offset < (img.length - 1) * width) {
      offset = offset + width;
      imgWrap.style.right = offset + "px";
      pagImg[pic].classList.add("slider-card__pagination_active");
      pagImg[pic - 1].classList.remove("slider-card__pagination_active");

      pic = pic + 1;
      console.log(pic);
    }
  });
  btnPrev.addEventListener("click", () => {
    if (offset > 0) {
      offset = offset - width;
      imgWrap.style.right = offset + "px";

      pic = pic - 1;
      pagImg[pic - 1].classList.add("slider-card__pagination_active");
      pagImg[pic].classList.remove("slider-card__pagination_active");
      console.log(pic);
    }
  });
  pagImg.forEach((el, index) => {
    el.addEventListener("click", () => {
      console.log(index);
      if (index == 0) {
        offset = 0;
        imgWrap.style.right = offset + "px";
      }
      if (index == 1) {
        offset = width;
        imgWrap.style.right = offset + "px";
      }
      if (index == 2) {
        offset = width * 2;
        imgWrap.style.right = offset + "px";
      }
      if (index == 3) {
        offset = width * 3;
        imgWrap.style.right = offset + "px";
      }
      pagImg.forEach((elms) => {
        elms.classList.remove("slider-card__pagination_active");
      });
      el.classList.add("slider-card__pagination_active");
    });
  });
};
export { initSliderCard };
