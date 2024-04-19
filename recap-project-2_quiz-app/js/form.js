const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');

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
  tag.textContent = tagInput;

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

const yourQuestion = document.querySelector('[data-js="yourQuestion"]');
const amountLeft = document.querySelector('[data-js="amountLeft"]');
const maxLength = yourQuestion.getAttribute("maxlength");

const updateAmountLeft = (value) => {
  amountLeft.innerText = value;
};

updateAmountLeft(maxLength);

yourQuestion.addEventListener("input", () => {
  updateAmountLeft(maxLength - yourQuestion.value.length);
});

// how do I get the Form Date into the Card? Really FormData and then some kinda loop? Or do I grab every individual one with target element?
// Check in the code from class and the exercises of the others and come up with (a probably failing) attempt, then ask coach.

// appends will go here. Is this also all singularly? Or some kind of Loop sitation?
