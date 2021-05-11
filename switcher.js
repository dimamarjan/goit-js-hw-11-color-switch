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
  console.log("START");
  if (startBtn.dataset.action === "start") {
    startBtn.dataset.action = "changing-now";
    rotationColorsTemp = setInterval(changeColorBody, 1000, colors);
  }
};

const stopSwitching = () => {
  console.log("STOP");
  if (startBtn.dataset.action === "changing-now") {
    clearInterval(rotationColorsTemp);
    startBtn.dataset.action = "start";
  }
};

startBtn.addEventListener("click", switchinColorsBody);
stoptBtn.addEventListener("click", stopSwitching);
