console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

/* 
const toastMessageContainer = document.createElement("list");
console.log(toastMessageContainer); */

addButton.addEventListener("click", (e) => {
  e.preventDefault;
  const newToastContainer = document.createElement("list");
  toastContainer.append(newToastContainer);
  newToastContainer.textContent = "I'm also a toast message.";
  newToastContainer.classList.add("toast-container__message");
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";
});
