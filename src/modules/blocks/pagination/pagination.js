import { words } from "../../word";
const wordsDeclensions = [
  "варианта аренды",
  "вариантов аренды",
  "вариантов аренды",
];

const initPagination = (element) => {
  const totalItems = Number(element.getAttribute("data-totalItems"));
  const itemsOnPage = Number(element.getAttribute("data-itemsOnPage"));
  const buttonsContainer = element.querySelector(".js-pagination__buttons");
  const textCounter = element.querySelector(".js-pagination__text-counter");
  const lastPage = Math.ceil(totalItems / itemsOnPage);
  let activePage = 1;

  const updateCountText = () => {
    if (activePage === lastPage) {
      const lastItem = totalItems;
      const totalCountText = totalItems > 100 ? "100+" : totalItems;
      textCounter.textContent = `${
        itemsOnPage * (activePage - 1) + 1
      } - ${lastItem} из ${words(totalCountText, wordsDeclensions)}`;
    } else {
      const lastItem = activePage * itemsOnPage;
      const totalCountText = totalItems > 100 ? "100+" : totalItems;
      textCounter.textContent = `${
        itemsOnPage * (activePage - 1) + 1
      } - ${lastItem} из ${words(totalCountText, wordsDeclensions)}`;
    }
  };

  const createPageButton = (pageNumber) => {
    const buttonEl = document.createElement("button");
    buttonEl.textContent = pageNumber;
    buttonEl.classList.add("js-pagination__btn", "js-pagination__page");
    const pageButtonClick = () => {
      activePage = pageNumber;
      render();
    };
    if (activePage === pageNumber) {
      buttonEl.classList.add("js-pagination__btn_active");
    }
    buttonEl.addEventListener("click", pageButtonClick);
    return buttonEl;
  };

  const createNextButton = () => {
    const nextButton = document.createElement("button");
    nextButton.classList.add("js-pagination__btn", "js-pagination__btn-next");
    nextButton.setAttribute("type", "button");
    nextButton.textContent = "arrow_forward";
    if (activePage === lastPage) {
      nextButton.classList.add("btn-disabled");
      nextButton.setAttribute("disabled", true);
    } else {
      const handlerNextButtonClick = () => {
        activePage++;
        render();
      };
      nextButton.addEventListener("click", handlerNextButtonClick);
    }
    return nextButton;
  };

  const createDots = () => {
    const dotsText = document.createElement("i");
    dotsText.textContent = "...";
    dotsText.classList.add("js-pagination__dots");
    return dotsText;
  };

  //варианты отображения кнопок страниц
  const getMiddleBtns = () => {
    const result = [];
    const leftPage = activePage - 1;
    const rightPage = activePage + 1;

    switch (activePage) {
      default:
        result.push(createDots());
        result.push(createPageButton(leftPage));
        result.push(createPageButton(activePage));
        result.push(createPageButton(rightPage));
        result.push(createDots());
        break;
      case 1:
      case 2:
        result.push(createPageButton(2));
        result.push(createPageButton(3));
        result.push(createDots());
        break;
      case 3:
        result.push(createPageButton(leftPage));
        result.push(createPageButton(activePage));
        result.push(createPageButton(rightPage));
        result.push(createDots());
        break;
      case lastPage - 1:
        result.push(createDots());
        result.push(createPageButton(leftPage));
        result.push(createPageButton(activePage));
        break;
      case lastPage - 2:
        result.push(createDots());
        result.push(createPageButton(leftPage));
        result.push(createPageButton(activePage));
        result.push(createPageButton(rightPage));
        break;
      case lastPage:
        result.push(createDots());
        result.push(createPageButton(activePage - 2));
        result.push(createPageButton(leftPage));
    }
    return result;
  };

  //варианты отображения при количестве страниц до и более dotlessPage
  const startPage = 1;
  const dotlessPage = 5;
  const render = () => {
    buttonsContainer.innerHTML = "";
    if (lastPage <= dotlessPage) {
      const buttons = [];
      const nextButton = createNextButton();
      for (let i = startPage; i <= lastPage; i += 1) {
        buttons.push(createPageButton(i));
      }
      buttonsContainer.append(...buttons, nextButton);
    } else {
      const firstButton = createPageButton(startPage);
      const lastButton = createPageButton(lastPage);
      const middleButtons = getMiddleBtns();
      const nextButton = createNextButton();
      buttonsContainer.append(
        firstButton,
        ...middleButtons,
        lastButton,
        nextButton
      );
    }
    updateCountText();
  };

  render();
};

const paginationElements = document.querySelectorAll(".js-pagination");

paginationElements.forEach((element) => initPagination(element));
