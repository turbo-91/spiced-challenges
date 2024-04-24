console.clear();
import { getRandomColor } from "./utils/randomColor.js";
import Circle from "./components/Circle/Circle.js";

const root = document.getElementById("root");

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
