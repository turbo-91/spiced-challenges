import Link from "next/link";
import React from "react";
import { introduction } from "@/src/data/data";
import { useRouter } from "next/router";
import { volumes } from "@/src/data/data";

export default function Volumes() {
  const router = useRouter();
  function getRandomElement(array) {
    router.push(
      `./volumes/${array[Math.floor(Math.random() * array.length)].slug}`
    );
  }

  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <button type="button" onClick={() => getRandomElement(volumes)}>
        Go to a Volume
      </button>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map(({ slug, title }) => {
          return (
            <li key={slug}>
              <Link href={`/volumes/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
