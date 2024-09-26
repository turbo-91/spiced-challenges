import getRandomColor from "./utils/randomColor.js";

function Pentagon() {
  const pentagon = document.createElement("div");
  pentagon.classList.add("pentagon");
  pentagon.addEventListener("click", () => {
    let randomColor = getRandomColor();
    pentagon.style.backgroundColor = randomColor;
  });
  return pentagon;
}

export default Pentagon;
