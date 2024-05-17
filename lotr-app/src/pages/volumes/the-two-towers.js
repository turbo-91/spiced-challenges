import Link from "next/link";
import React from "react";
import { volumes } from "@/resources/lib/data";

export default function TheTwoTowers() {
  let towersSlug = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <>
      <Link href={`/volumes/`}>All Volumes</Link>
      <h1>{towersSlug.title}</h1>
      <p>{towersSlug.description}</p>
      <ul>
        <li>
          {`${towersSlug.books[0].ordinal}: "${towersSlug.books[0].title}"`}
        </li>
        <li>
          {`${towersSlug.books[1].ordinal}: "${towersSlug.books[1].title}"`}
        </li>
      </ul>
    </>
  );
}
