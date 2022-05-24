const likeBtn = document.querySelectorAll(".js-like__btn");
const likeSet = ({ currentTarget }) => {
  const countEl = currentTarget.querySelector(".js-like__count");

  if (currentTarget.classList.contains("like__btn_liked")) {
    currentTarget.classList.remove("like__btn_liked");
    currentTarget.classList.add("like__btn_not-liked");
    countEl.textContent--;
  } else {
    currentTarget.classList.remove("like__btn_not-liked");
    currentTarget.classList.add("like__btn_liked");
    countEl.textContent++;
  }
};
likeBtn.forEach((targets) => {
  targets.addEventListener("click", likeSet);
});
