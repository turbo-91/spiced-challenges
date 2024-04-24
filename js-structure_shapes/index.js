console.clear();
import getRandomColor from "./utils/randomColor.js";

const root = document.getElementById("root");

const circle = document.createElement("div");
circle.classList.add("circle");
circle.addEventListener("click", () => {
  let randomColor = getRandomColor();
  console.log(randomColor);
  circle.style.backgroundColor = randomColor;
});

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  let randomColor = getRandomColor();
  console.log(randomColor);
  square.style.backgroundColor = randomColor;
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  let randomColor = getRandomColor();
  console.log(randomColor);
  pentagon.style.backgroundColor = randomColor;
});

root.append(circle, square, pentagon);
