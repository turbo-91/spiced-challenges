.knl

console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible
*/

getCurrentHour = (now, currentHour) => {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) return "12am"  
  else if (currentHour === 0)
};

getCurrentHour = () => {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0)  {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
};

const getVectorLength = (x, y, z) => {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
}

function cleanInput(string) {
  return string.toLowerCase().trim();
}

/*
Rewrite the following arrow functions as classic functions.
*/

function isOddAndSmall(number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
};

function add3(a, b, c) {a + b + c};

function repeat10(string) {string.repeat(10)};

