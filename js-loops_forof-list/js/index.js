console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

//_______ my Code __________

const li = document.createElement("li");
console.log(li);

for (const language of programmingLanguages) {
  li.textContent = language;
  ol.append(li);
}
