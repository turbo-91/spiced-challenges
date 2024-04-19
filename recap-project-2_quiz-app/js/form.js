const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const paragraph = document.createElement("paragraph");
  paragraph.textContent = "test!";
  document.body.append(paragraph);
});

//const section = document.createElement("section");
//const img = document.createElement("img");
