import Chance from "chance";

const chance = new Chance();

const character = {
  firstName: chance.first(),
  lastName: chance.last(),
  x: chance.twitter(),
  geohash: chance.geohash({ length: 4 }),
};

export default function handler(request, response) {
  console.log("I am in the API what a chance");
  response.status(200).json(character);
}
