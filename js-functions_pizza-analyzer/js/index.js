console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  let pizzaSize1 = pizzaInput1.value;
  calculatePizzaGain(PizzaSize1, PizzaSize2)
});

pizzaInput2.addEventListener("input", () => {
  let pizzaSize2 = pizzaInput1.value;
  calculatePizzaGain(PizzaSize1, PizzaSize2)
});

// Task 1
function calculatePizzaGain(pizzaSize1, PizzaSize2) {
  function area1() {
    (diameter1 / 2) * (diameter1 / 2) * Math.PI;
  }
  function area2() {
    (diameter2 / 2) * (diameter2 / 2) * Math.PI;
  }
  function pizzaGainRelativeToPizzaOne() {
    ((area2 - area1) / area1) * 100;
  }
  document.querySelector('[data-js="output-section"]').textContent = Math.round(
    pizzaGainRelativeToPizzaOne()
  );
}

// Task 2
function updatePizzaDisplay(pizzaElement, newSize) {
  function newDisplaySize() {
    (newSize / 24) * 100;
  }
  pizzaElement.style.width(newDisplaySize) = newDisplaySize + "px"
}
// Task 3
// define the function updateOutputColor here
