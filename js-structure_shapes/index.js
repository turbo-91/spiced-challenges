console.clear();
import getRandomColor from "./utils/randomColor.js";

const root = document.getElementById("root");

function Circle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    let randomColor = getRandomColor();
    circle.style.backgroundColor = randomColor;
  });
  return circle;
}

const circleElement = Circle();

function Square() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    let randomColor = getRandomColor();
    square.style.backgroundColor = randomColor;
  });
  return square;
}

const squareElement = Square();

function Pentagon() {
  const pentagon = document.createElement("div");
  pentagon.classList.add("pentagon");
  pentagon.addEventListener("click", () => {
    let randomColor = getRandomColor();
    pentagon.style.backgroundColor = randomColor;
  });
  return pentagon;
}

const pentagonElement = Pentagon();

root.append(circleElement, squareElement, pentagonElement);
