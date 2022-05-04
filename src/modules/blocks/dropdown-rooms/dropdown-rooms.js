//выползание списка в дропдауне
document.addEventListener("click", (e) => {
  const isDropdownRoomButton = e.target.matches("[data-dropdownRoom-button]");
  if (!isDropdownRoomButton && e.target.closest("[data-dropdownRoom]") != null)
    return;

  let currentDropdownRoom;
  if (isDropdownRoomButton) {
    currentDropdownRoom = e.target.closest("[data-dropdownRoom]");
    currentDropdownRoom.classList.toggle("active");
  }

  document
    .querySelectorAll("[data-dropdownRoom].active")
    .forEach((dropdown) => {
      if (dropdown === currentDropdownRoom) return;
      dropdown.classList.remove("active");
    });
});
//работа счетчика в дропдауне
let btnPlusRoom1 = document.getElementById("dropdown-oneLiRoom-plus");
let btnPlusRoom2 = document.getElementById("dropdown-TwoLiRoom-plus");
let btnPlusRoom3 = document.getElementById("dropdown-ThreeLiRoom-plus");
let btnMinusRoom1 = document.getElementById("dropdown-oneLiRoom-minus");
let btnMinusRoom2 = document.getElementById("dropdown-TwoLiRoom-minus");
let btnMinusRoom3 = document.getElementById("dropdown-ThreeLiRoom-minus");
let calcRoom1 = document.getElementById("calcRoom1");
let calcRoom2 = document.getElementById("calcRoom2");
let calcRoom3 = document.getElementById("calcRoom3");
let maxRooms = 4;

function plus1() {
  console.log("нажато");
  let countRoomPlus = calcRoom1.innerHTML;
  if (countRoomPlus < maxRooms) {
    calcRoom1.innerHTML++;
    if (calcRoom1.innerHTML > 1) {
      btnMinusRoom1.className = "";
    }
    if (calcRoom1.innerHTML == maxRooms) {
      btnPlusRoom1.className = "non-active";
    }
  }
  dropRoomClick();
}
function plus2() {
  let countRoomPlus = calcRoom2.innerHTML;
  if (countRoomPlus < maxRooms) {
    calcRoom2.innerHTML++;
    if (calcRoom2.innerHTML > 1) {
      btnMinusRoom2.className = "";
    }
    if (calcRoom2.innerHTML == maxRooms) {
      btnPlusRoom2.className = "non-active";
    }
  }
  dropRoomClick();
}
function plus3() {
  let countRoomPlus = calcRoom3.innerHTML;
  if (countRoomPlus < maxRooms) {
    calcRoom3.innerHTML++;
    if (calcRoom3.innerHTML > 0) {
      btnMinusRoom3.className = "";
    }
    if (calcRoom3.innerHTML == maxRooms) {
      btnPlusRoom3.className = "non-active";
    }
  }
  dropRoomClick();
}
btnPlusRoom1.onclick = plus1;
btnPlusRoom2.onclick = plus2;
btnPlusRoom3.onclick = plus3;

function minus1() {
  let countMinus = calcRoom1.innerHTML;
  if (countMinus > 1) {
    calcRoom1.innerHTML--;
    if (calcRoom1.innerHTML == 1) {
      btnMinusRoom1.className = "non-active";
    }
    if (calcRoom1.innerHTML < maxRooms) {
      btnPlusRoom1.className = "";
    }
  }
  dropRoomClick();
}
function minus2() {
  let countMinus = calcRoom2.innerHTML;
  if (countMinus > 1) {
    calcRoom2.innerHTML--;
    if (calcRoom2.innerHTML == 1) {
      btnMinusRoom2.className = "non-active";
    }
    if (calcRoom2.innerHTML < maxRooms) {
      btnPlusRoom2.className = "";
    }
  }
  dropRoomClick();
}
function minus3() {
  let countMinus = calcRoom3.innerHTML;
  if (countMinus > 0) {
    calcRoom3.innerHTML--;
    if (calcRoom3.innerHTML == 0) {
      btnMinusRoom3.className = "non-active";
    }
    if (calcRoom3.innerHTML < maxRooms) {
      btnPlusRoom3.className = "";
    }
  }
  dropRoomClick();
}

btnMinusRoom1.onclick = minus1;
btnMinusRoom2.onclick = minus2;
btnMinusRoom3.onclick = minus3;

// setTimeout(plus1, 10);
// setTimeout(plus2, 20);

//суммирование комнат
let rooms = document.getElementById("rooms");

let thirdRoom = "ванных комнат";
function dropRoomClick() {
  if (Number(calcRoom1.innerHTML) > 1) {
    firstRoom = "спальни";
  } else {
    firstRoom = "спальня";
  }
  if (Number(calcRoom2.innerHTML) > 1) {
    secondRoom = "кровати";
  } else {
    secondRoom = "кровать";
  }
  if (Number(calcRoom3.innerHTML) == 0) {
    thirdRoom = "ванных комнат";
  }
  if (Number(calcRoom3.innerHTML) == 1) {
    thirdRoom = "ванная комната";
  }
  if (Number(calcRoom3.innerHTML) > 1) {
    thirdRoom = "ванных комнаты";
  }
  let calcAllRoom =
    Number(calcRoom1.innerHTML) +
    " " +
    firstRoom +
    ", " +
    Number(calcRoom2.innerHTML) +
    " " +
    secondRoom +
    ", " +
    Number(calcRoom3.innerHTML) +
    " " +
    thirdRoom;
  // rooms.value = calcAllRoom;
  rooms.value = calcAllRoom.substr(0, 20) + "...";
}
// btn1();
