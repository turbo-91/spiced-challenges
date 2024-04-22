// bookmark icon toggle

const bookmark = document.querySelector('[data-js="bookmark"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("question-card__icon__hidden");
});

// button text toggle

const button = document.querySelector('[data-js="button"]');
const answer = document.querySelector('[data-js="answer"]');

function buttonSwitch() {
  if (button.getAttribute === "question-card__answer__unhide") {
    button.textContent = "Hide answer";
  } else {
    button.textContent = "show answer";
  }
}

button.addEventListener("click", () => {
  answer.classList.toggle("question-card__answer__unhide");
  buttonSwitch();
});

// show / hide answer toggle
