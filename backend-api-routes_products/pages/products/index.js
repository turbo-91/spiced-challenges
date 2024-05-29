import useSWR from "swr";
import Link from "next/link";

export default function AllListings() {
  const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  };
  const { data, error, isLoading } = useSWR(`/api/products`, fetcher);

  console.log("data", data);

  if (error) return <div>Could not fetch products...</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </ul>
  );
}
