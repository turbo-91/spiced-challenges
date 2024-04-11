const data = [
  ,
  null,
  5,
  isNaN("Hello!"),
  "My backshot goes like bongos!",
  true,
  9007199254740991n,
  function printLetter(name) {
    console.log("Hi " + name + ", hope you are fine. Love, Johnny");
  },
  {
    name: "Max Paddington",
    age: 21,
    isStudent: false,
  },
  ["apple", "tomato"],
  (type = "I have no idea!"),
];

switch (data) {
    case "undefined!":
      console.log(typeof ,);
      break;
    case "null!":
      console.log(typeof null);
      break;
    case "number!":
      console.log(typeof 5);
      break;
    case "not a number!":
      console.log(typeof isNaN("Hello!"));
      break;
      case "boolean!":
      console.log(typeof true);
      break;
    case "bigint!":
      console.log(typeof 9007199254740991n);
      break;
    case "function!":
      console.log(typeof function printLetter(name) {
        console.log("Hi " + name + ", hope you are fine. Love, Johnny");
      });
      break;
    case "object!":
      console.log(typeof {
        name: "Max Paddington",
        age: 21,
        isStudent: false,
      });
      break;
    case "array!":
      console.log(typeof ["apple", "tomato"]);
      break;
    case "I have no idea!":
      console.log(typeof (type = "I have no idea!"));
      break;
  }