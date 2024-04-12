console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

let bestsellerTitle = "The Fifth Season";
let bestsellerAuthor = "N. K. Jemisin";
let bestsellerRating = 4.6;
let bestsellerSales = 10000;

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120 */

logBookData();

/*Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.*/

/*
 */

// --v-- write your code here --v--
bestsellerRating = 4.8;
bestsellerSales = 20000;

logBookData();

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

function logBookData() {
  console.log("Title: ", bestsellerTitle);
  console.log("Author: ", bestsellerAuthor);
  console.log("Rating :", bestsellerRating);
  console.log("Sales :", bestsellerSales);
}

bestsellerRating = 4.9;
bestsellerSales = 30000;

logBookData();

bestsellerRating = 5.0;
bestsellerSales = 1000000000000;

logBookData();
