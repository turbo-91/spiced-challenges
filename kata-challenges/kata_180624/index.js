// I need to iterate over the array (for loop)
// so that the three arrays become one array
// with the first one in its original order
// the second one from right to left
// and the third one in its original order again
// the order can be achieved by determing if the first index is even or uneven

let arr = [
  ["Stefan", "Raj", "Marie"],
  ["Alexa", "Amy", "Edward"],
  ["Liz", "Claire", "Juan"],
  ["Dee", "Luke", "Katie"],
];

function binRota(arr) {
  let result = [];

  arr.forEach((row, index) => {
    if (index % 2 === 0) {
      result.push(...row);
    } else {
      result.push(...row.reverse());
    }
  });

  return result;
}
