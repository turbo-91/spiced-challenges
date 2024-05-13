import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./App.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    async function getISSCoords() {
      try {
        // "Fetch from the given url saved in the constant `URL`."
        const response = await fetch(URL);
        const data = await response.json();
        // After fetching successfully update the `coords` state accordingly.
        const longitude = data.longitude;
        const latitude = data.latitude;
        setCoords({ longitude: longitude, latitude: latitude });
      } catch (error) {
        console.log(error);
      }
    }
    getISSCoords();
    const interval = setInterval(getISSCoords, 5000);
    return clearInterval(interval);
  }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        // onRefresh={() => getISSCoords} // >>>> "Test if the function works as expected. "<<<<
      />
    </main>
  );
}
