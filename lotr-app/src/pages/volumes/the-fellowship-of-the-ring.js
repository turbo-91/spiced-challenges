import Link from "next/link";
import React from "react";
import { volumes } from "@/resources/lib/data";
import Image from "next/image";

export default function TheFellowshipOfTheRing() {
  let fellowshipSlug = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  console.log(fellowshipSlug);
  return (
    <>
      <Link href={`/volumes/`}>All Volumes</Link>
      <h1>{fellowshipSlug.title}</h1>
      <p>{fellowshipSlug.description}</p>
      <ul>
        <li>
          {`${fellowshipSlug.books[0].ordinal}: "${fellowshipSlug.books[0].title}"`}
        </li>
        <li>
          {`${fellowshipSlug.books[1].ordinal}: "${fellowshipSlug.books[1].title}"`}
        </li>
      </ul>
      <Image
        src="/images/the-fellowship-of-the-ring.png"
        alt={fellowshipSlug.title}
        width={140}
        height={230}
      />
      ;
    </>
  );
}
