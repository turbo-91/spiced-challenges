/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

1. On button click: The value of the first input field is copied into the second input field

2. On button click: The value of the first input field is copied in uppercase into the second input field

3. On button click: The values of the two input fields switch.

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const button = document.querySelector("[data-js=button]");

button.addEventListener("click", () => {
    const firstInputValue = firstInput.value();
    secondInput.textContent() = firstInputValue;
})

button.addEventListener("click", () => {
    const firstInputValue = firstInput.value();
    secondInput.textContent() = firstInputValue;
    secondInput.toUpperCase();
})
button.addEventListener("click", () => {
    const switchStep1 = secondInput.value();
    const switchStep2 = firstInput.value();
    firstInput.textContent() = switchStep1;
    secondInput.textContent() = switchStep2;});
