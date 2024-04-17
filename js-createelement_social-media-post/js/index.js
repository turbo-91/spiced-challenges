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
section.classList.add("post");
