console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;
  console.log(formElements.numberA.value);
  const numberA = document.getElementById("number-a");
  const numberB = document.getElementById("number-b");
  const operator = document.getElementsByName("operator");
  const numA = Number(numberA.value);
  const numB = Number(numberB.value);
  let result;
  if (operator[0].checked) {
    console.log("Add");
    result = add(numA, numB);
  } else if (operator[1].checked) {
    console.log("Subtract");
    result = subtract(numA, numB);
  } else if (operator[2].checked) {
    console.log("Multiply");
    result = multiply(numA, numB);
  } else if (operator[3].checked) {
    console.log("Divide");
    result = divide(numA, numB);
  }

  resultOutput.textContent = result;
});
