const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);

  if (age < 20 && age > 12) {
    output.innerHTML = "You are a teen.";
  } else if ((age > 20 && age < 79) || (age < 13 && age >= 0)) {
    output.innerHTML = "You are not a teen.";
  } else if (age < 0) {
    output.innerHTML = "How are you aging backwards? Are you Benjamin Button?";
  } else if (age > 79 && age < 109) {
    output.innerHTML =
      "While I respect you as an elder, I have to tell you that you are not a teen.";
  } else if (age > 109 && age < 122) {
    output.innerHTML =
      "Damn, you are a medical wonder but no teen, unfortunately...";
  } else if (age > 123 && age < 150) {
    output.innerHTML =
      "Congratulations! You are older than the oldest human to be alive ever recorded!";
  } else if (age > 149) {
    output.innerHTML = "You are either lying or not human.";
  }

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.
});
