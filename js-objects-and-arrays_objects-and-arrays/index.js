console.clear();

const people = [
  {
    name: "Homer",
    age: 39,
    parents: { mothersName: "Mona", fathersName: "Abe" },
    pet: { animal: "dog", name: "Santa's Little Helper" },
    friend: { name: "Moe Szyslak", work: "owner of Moes Tavern" },
    "other friends": ["Barney Gumble", "Carl Carlson", "Lenny Leonard"],
    color_cloth: "white",
  },
  {
    name: "Marge",
    age: 36,
    parents: {
      mothersName: "Jacqueline Bouvier",
      fathersName: "Clancy Bouvier",
    },
    pet: { animal: "dog", name: "Santa's Little Helper" },
    kids: [
      { name: "Bart", child_number: "first" },
      { name: "Lisa", child_number: "second" },
      { name: "Maggie", child_number: "third" },
    ],
    color_cloth: "lightgreen",
  },
  {
    name: "Bart",
    age: 10,
    parents: { mothersName: "Marge", fathersName: "Homer" },
    pet: { animal: "dog", name: "Santa's Little Helper" },
    quotes: ["Ay Caramba!", "Eat my shorts!", "I didnt do it!"],
    color_cloth: "red",
  },
  {
    name: "Lisa",
    age: 8,
    parents: { mothersName: "Marge", fathersName: "Homer" },
    pet: { animal: "dog", name: "Santa's Little Helper" },
    quotes: [
      "Bart!",
      "If anyone wants me, Ill be in my room.",
      "Quit it, Bart!",
    ],
    color_cloth: "orange",
  },
];

// EXERCISE 1
// Change the value of the variable nameOfFirstPerson to equal the name of the first person.

const nameOfFirstPerson = people[0].name;
console.log("The name of the first person is: ", nameOfFirstPerson);

// EXERCISE 2
// Change the value of the variable homersOtherFriends to equal the other friends of Homer.

const homersOtherFriends = people[0]["other friends"];
console.log("Homer's other friends are: ", homersOtherFriends);

// EXERCISE 3
// Change the value of the variable ageOfThirdPerson to equal the age of the third person.

const ageOfThirdPerson = people[2].age;
console.log("Bart is ", ageOfThirdPerson, " years old.");

// EXERCISE 4
// Change the value of the variable mothersNameOfSecondPerson to equal the mothers name of the second person.

const mothersNameOfSecondPerson = people[1].parents.mothersName;
console.log("Marge's mother's name is :", mothersNameOfSecondPerson);

// EXERCISE 5
// Change the value of the variable animaltypeOfLisasPet to equal the type of animal of Lisas pet.

const animaltypeOfLisasPet = people[3].pet.animal;
console.log("Lisa's pet is a :", animaltypeOfLisasPet);

export {
  nameOfFirstPerson,
  homersOtherFriends,
  ageOfThirdPerson,
  mothersNameOfSecondPerson,
  animaltypeOfLisasPet,
};
