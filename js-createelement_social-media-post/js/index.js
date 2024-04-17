console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

/* const bodyNew = document.createElement(body);

const headlineNew = document.createElement(h1);
headlineNew.textContent = "Social Media Post";
body.append(h1); */

const sectionNew = document.createElement(section);
sectionNew.classList.add("post");

const paragraphNew = document.createElement(paragraph);
paragraphNew.classList.add("post__content");

const footerNew = document.createElement(footer);
footerNew.classList.add("post__footer");

const spanNew = document.createElement(span);
spanNew.classList.add("post__username");

body.append(sectionNew);
sectionNew.append(paragraphNew);
sectionNew.append(footer);
footerNew.append(span);
