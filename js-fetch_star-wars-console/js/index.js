console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Bad Romance");
    }
  } catch (error) {
    console.error("Someone fucked up");
  }
}

const dataObject = await fetchData();

console.log("Entire object: ", dataObject.results);

console.log("Princess with iconic donut hair: ", dataObject.results[4].name);
console.log("R2D2 has " + dataObject.results[2].eye_color + " eyes.");
console.log(
  "Slavery will always be bad even if you do it to Androids whose skin color is",
  dataObject.results[1].skin_color
);
