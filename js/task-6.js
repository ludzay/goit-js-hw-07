function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const BtnCreate = document.querySelector("button[data-create]");
const BtnDestroy = document.querySelector("button[data-destroy]");
const InpNum = document.querySelector("input");
const AddBox = document.getElementById("boxes");
let Num = 0;

function clickHandlerCreate(event) {
  let j = 0;
  InpNum.value = "";
  console.log(InpNum);
  if (Num > 0 && Num <= 100) {
    for (let i = 1; i <= Num; i += 1) {
      const DivBox = document.createElement("div");
      DivBox.classList.add("box" + i);
      DivBox.style.width = (j + 30).toString() + "px";
      DivBox.style.height = (j + 30).toString() + "px";
      DivBox.style.backgroundColor = getRandomHexColor();
      AddBox.append(DivBox);
      j += 10;
    }
  }
}

function clickHandlerDestroy(event) {
  // const RemBox = document.getElementById("boxes");
  AddBox.innerHTML = '<div id="boxes"></div>';
}

function inputHandler(event) {
  AddBox.innerHTML = '<div id="boxes"></div>';
  Num = event.target.value;
}

BtnCreate.addEventListener("click", clickHandlerCreate);
BtnDestroy.addEventListener("click", clickHandlerDestroy);
InpNum.addEventListener("input", inputHandler);
