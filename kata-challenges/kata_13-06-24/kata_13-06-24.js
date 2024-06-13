// I need to write a function sabb
// that counts how often the letters of the word 'sabbatical'
// exist in the provided String. Then I need to store that number in a
// variable, and sum it with the respective variables for val and happiness.
// If the sum is > 22 I return 'Sabbatical! Boom!', else 'Back to your desk, boy.'

// s a b t i c l
let string =
  "GIVE ME THE FUCKING SABBATICAL RIGHT THE FUCK NOW OR I WILL KILL YOU!!!!!!!!!!";
let val = 0;
let happiness = 0;

function sabb(string, val, happiness) {
  function countLetters(string) {
    const lowerString = string.toLowerCase();
    const sabbatical = "sabbatical";
    let count = 0;
    for (let letter of sabbatical) {
      count += lowerString.split("").filter((char) => char === letter).length;
    }
    return count;
  }

  const count = countLetters(string);
  let finalSum = count + val + happiness;
  if (finalSum > 22) {
    return "Sabbatical! Boom!";
  } else {
    return "Back to your desk, boy.";
  }
}

console.log(sabb(string, val, happiness));
