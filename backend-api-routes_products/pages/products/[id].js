import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

export default function Joke() {
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
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <small>ID: {id}</small>
      <h1>{data.name} </h1>
      <Link href="/products">Back to all</Link>
    </>
  );
}
