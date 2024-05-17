import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Link href={`/pages/volumes/index.js`}>
        One Ring to rule them all, One Ring to find them, One Ring to bring them
        all and in the darkness bind them
      </Link>
    </>
  );
}
