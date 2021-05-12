const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const mainBodySection = document.querySelector("body");
const startBtn = document.querySelector("button[data-action='start'");
const stoptBtn = document.querySelector("button[data-action='stop'");

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeColorBody = (arr) => {
  mainBodySection.style.backgroundColor =
    colors[randomIntegerFromInterval(0, arr.length - 1)];
};

let rotationColorsTemp;
let unlockerBtnStart = true;

const switchinColorsBody = () => {
  if (unlockerBtnStart) {
    unlockerBtnStart = false;
    rotationColorsTemp = setInterval(changeColorBody, 1000, colors);
  }
};

const stopSwitching = () => {
  clearInterval(rotationColorsTemp);
  unlockerBtnStart = true;
};

startBtn.addEventListener("click", switchinColorsBody);
stoptBtn.addEventListener("click", stopSwitching);
