// Assess the team to determine the boredom level of the team

// Provided: object(staff) with names as keys and department as values.

// boredom scores:
// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

// What we need:
// - Iterate through each employee to determine their department
// - Increase the team score by the department's boredom score
// - Return the appropriate sentiment based on the total team score

// the correct way
function boredom(staff) {
  let teamScore = 0;
  let response = "";

  for (const employee in staff) {
    switch (staff[employee]) {
      case "accounts":
        teamScore += 1;
        break;
      case "finance":
        teamScore += 2;
        break;
      case "canteen":
        teamScore += 10;
        break;
      case "regulation":
        teamScore += 3;
        break;
      case "trading":
        teamScore += 6;
        break;
      case "change":
        teamScore += 6;
        break;
      case "IS":
        teamScore += 8;
        break;
      case "retail":
        teamScore += 5;
        break;
      case "cleaning":
        teamScore += 4;
        break;
      case "pissing about":
        teamScore += 25;
        break;
      default:
        break;
    }
  }
  teamScore <= 80 ? (response = "kill me now") : "";
  teamScore < 100 && teamScore > 80 ? (response = "i can handle this") : "";
  teamScore >= 100 ? (response = "party time!!") : "";
  return response;
}

// the confusing way
function boredom1(staff) {
  let totalScore = 0;
  const deptScore = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25,
  };
  for (const employee in staff) {
    console.log("staff[employee]", staff[employee]);
    console.log(
      "department score staff employee: ",
      deptScore[staff[employee]]
    );
    totalScore += deptScore[staff[employee]];
  }
  //   console.log("Total Score: ", totalScore);
}
boredom1({
  tim: "change",
  jim: "accounts",
  randy: "canteen",
  sandy: "change",
  andy: "change",
  katie: "IS",
  laura: "change",
  saajid: "IS",
  alex: "trading",
  john: "accounts",
  mr: "finance",
});