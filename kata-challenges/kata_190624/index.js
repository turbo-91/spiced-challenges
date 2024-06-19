/* 
You're given a string of dominos. For each slot, there are 3 options:

"|" represents a standing domino

"/" represents a knocked over domino

" " represents a space where there is no domino

For example:

"||| ||||//| |/"
Tipping a domino will cause the next domino to its right to fall over as well, but if a domino is already tipped over, or there is a domino missing, the reaction will stop.
What you must do is find the resulting string if the first domino is pushed over. So in out example above, the result would be:

"/// ||||//| |/"
since the reaction would stop as soon as it gets to a space. */

/* 

- I have to iterate over the string which means it's easiest to transform it into an array
- I need to make a distinction whether the dominos are falling right now or the reaction needs to be started
-> boolean
- when looping over the array i need to distinct if the domino is standing or has fallen or if there is no domino
- don't for get in the end: convert array back to string!


*/

function tipDominos(string) {
  // Convert the string to an array for easy manipulation
  let stringArray = string.split("");

  // Initialize a boolean variable to track the reaction
  let reactionActive = false;

  // Iterate through each character in the array
  for (let i = 0; i < stringArray.length; i++) {
    if (reactionActive) {
      if (stringArray[i] === "|") {
        // Knock over the standing domino
        stringArray[i] = "/";
      } else if (stringArray[i] === " " || stringArray[i] === "/") {
        // Stop the reaction if a space or knocked over domino is encountered
        break;
      }
    } else {
      // Start the reaction if the first domino is standing
      if (stringArray[i] === "|") {
        stringArray[i] = "/";
        reactionActive = true;
      }
    }
  }

  // Convert the array back to a string
  return stringArray.join("");
}
