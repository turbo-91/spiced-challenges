const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  // how do I get the Form Date into the Card? Really FormData and then some kinda loop? Or do I grab every individual one with target element?
  // Check in the code from class and the exercises of the others and come up with (a probably failing) attempt, then ask coach.

  const sectionCard = document.createElement("section");
  const img = document.createElement("img");
  const subheadling = document.createElement("h2");
  const button = document.createElement("button");
  const paragraph = document.createElement("paragraph");
  const divTagContainer = document.createElement("div");
  const divTag = document.createElement("div");

  // appends will go here. Is this also all singularly? Or some kind of Loop sitation?
});
