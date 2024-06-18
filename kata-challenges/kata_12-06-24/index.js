// I need to write a function boredom(staff)
// that access the value of every property of the object staff
// and assigns it the corresponding value of the boredomAssessmentScore
// these values need to be sumed up
// the I need to determine (function! condition!) where this sum falls on the appropriateSentiment scale
// and return the corresponding string

let staff = {
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
};

const boredomAssessmentScore = {
  accounts: 1,
  finance: 2,
  canteen: 10,
  regulation: 3,
  trading: 6,
  change: 6,
  IS: 8,
  retail: 5,
  cleaning: 4,
  pissingAbout: 25,
};

function boredom(staff) {
  let totalScore = 0;
  for (const key in staff) {
    staff.value === "the corresponding key.value of the boredomAssessmentScore"; // could be done with if/else
    totalScore += staff[key];
    if (totalScore < 80) return console.log("kill me now");
    if (totalScore < 100 && sum > 80) return console.log("I can handle this");
    else return console.log("party time!!");
  }
}
