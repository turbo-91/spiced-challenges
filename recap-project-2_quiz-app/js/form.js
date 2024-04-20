const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');

// Create new Question card on submit

function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const sectionCard = document.createElement("section");
  sectionCard.setAttribute("class", "question-card");

  const img = document.createElement("img");
  img.setAttribute("class", "question-card__icon");
  img.setAttribute("src", "./assets/bookmark.png");
  img.setAttribute("alt", "bookmark");

  const question = document.createElement("h2");
  question.setAttribute("class", "question-card__title");
  let questionInput = data.yourQuestion;
  question.textContent = questionInput;

  console.log(question);

  const answerButton = document.createElement("button");
  answerButton.setAttribute("class", "question-card__button");
  answerButton.textContent = "Hide Answer";

  const answer = document.createElement("paragraph");
  answer.setAttribute("class", "question-card__answer");
  let answerInput = data.yourAnswer;
  answer.textContent = answerInput;

  console.log(answer);

  const tagContainer = document.createElement("div");
  tagContainer.setAttribute("class", "question-card__tags");

  const tag = document.createElement("div");
  tag.setAttribute("class", "question-card__tag");
  let tagInput = data.yourTag;
  tag.textContent = "#" + tagInput;

  console.log(tag);

  main.append(sectionCard);
  sectionCard.append(img);
  sectionCard.append(question);
  sectionCard.append(answerButton);
  sectionCard.append(answer);
  sectionCard.append(tagContainer);
  tagContainer.append(tag);
}

form.addEventListener("submit", onSubmit);

// Character counter for question input field

const yourQuestion = document.querySelector('[data-js="yourQuestion"]');
const amountLeftQuestion = document.querySelector(
  '[data-js="amountLeftQuestion"]'
);
const maxLengthQuestion = yourQuestion.getAttribute("maxlength");

const updateAmountLeftQuestion = (value) => {
  amountLeftQuestion.innerText = value;
};

updateAmountLeftQuestion(maxLengthQuestion);

yourQuestion.addEventListener("input", () => {
  updateAmountLeftQuestion(maxLengthQuestion - yourQuestion.value.length);
});

// Character counter for answer input field

const yourAnswer = document.querySelector('[data-js="yourAnswer"]');
const amountLeftAnswer = document.querySelector('[data-js="amountLeftAnswer"]');
const maxLengthAnswer = yourAnswer.getAttribute("maxlength");

const updateAmountLeftAnswer = (value) => {
  amountLeftAnswer.innerText = value;
};

updateAmountLeftAnswer(maxLengthAnswer);

yourQuestion.addEventListener("input", () => {
  updateAmountLeftAnswer(maxLengthAnswer - yourAnswer.value.length);
});
