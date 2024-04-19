console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function checkTrue() {
  formElements.tos.checked;
}

const checkTrue = checkTrue();

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

tosCheckbox.addEventListener("change", (event) => {
  function checkTos(checkTrue) {
    if (checkTrue = true) {
      return function hideTosError()}

      else (checkTrue = false) {
        return function showTosError() }}})
        
  


form.addEventListener("submit", (event) => {
  event.preventDefault();
  function checkTos(checkTrue) {
    if ((checkTrue = true)) {
      return;
    }
    alert("Form submitted");
  }
});
