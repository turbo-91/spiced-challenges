import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = async (url) => {
  const res = await fetch(url);
  // If the status code between 200-299 still try to parse and throw
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function ISSTracker() {
  const { data, error, isLoading, mutate } = useSWR(URL, fetcher, {
    //refreshInterval: 5000,
  });
  console.log("data", data);
  if (error) return <div>An error has occurred...</div>;
  if (isLoading) return <div>Loading...</div>;

  function handleReload(data) {
    console.log("click!");
    mutate(data);
  }

  return (
    <main>
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        onRefresh={() => handleReload()}
      />
    </main>
  );
}
