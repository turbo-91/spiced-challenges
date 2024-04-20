// bookmark icon toggle

const bookmark = document.querySelector('[data-js="bookmark"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("question-card__icon__hidden");
});

// show / hide answer toggle

const button = document.querySelector('[data-js="button"]');
const answer = document.querySelector('[data-js="answer"]');

button.addEventListener("click", () => {
  button.classList.toggle("question-card__button__switch");
  answer.classList.toggle("question-card__answer__unhide");
});
