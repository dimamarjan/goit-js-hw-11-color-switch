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

const switchinColorsBody = () => {
  rotationColorsTemp = setInterval(changeColorBody, 1000, colors);
  startBtn.disabled = true;
};

const stopSwitching = () => {
  clearInterval(rotationColorsTemp);
  console.dir(startBtn);
  startBtn.disabled = false;
};

startBtn.addEventListener("click", switchinColorsBody);
stoptBtn.addEventListener("click", stopSwitching);
