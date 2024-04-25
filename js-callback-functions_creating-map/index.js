const numbers = [1, 2, 3, 4, 5];

function myMap(numbers, double) {
  resultArray = [];
  for (const element of numbers) {
    result = double(element);
    resultArray.push(result);
  }
  return resultArray;
}

function double(number) {
  return number * 2;
}

const doubledNumbers = myMap(numbers, double);
console.log(doubledNumbers); // Output should be [2, 4, 6, 8, 10]
