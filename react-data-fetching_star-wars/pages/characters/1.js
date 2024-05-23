import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";

const URL = "https://swapi.py4e.com/api/people/1";

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

export default function Character() {
  const id = 1;
  const { data, error, isLoading } = useSWR(URL, fetcher, {});
  console.log("data", data);
  if (error) return <div>An error has occurred...</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
