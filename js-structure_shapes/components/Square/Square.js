import getRandomColor from "./utils/randomColor.js";

function Square() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    let randomColor = getRandomColor();
    square.style.backgroundColor = randomColor;
  });
  return square;
}

export default Square;
