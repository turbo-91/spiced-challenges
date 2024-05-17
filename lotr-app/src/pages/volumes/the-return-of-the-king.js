import Link from "next/link";
import React from "react";
import { volumes } from "@/resources/lib/data";
import Image from "next/image";

export default function TheReturnOfTheKing() {
  let returnKingSlug = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );
  return (
    <>
      <Link href={`/volumes/`}>All Volumes</Link>
      <h1>{returnKingSlug.title}</h1>
      <p>{returnKingSlug.description}</p>
      <ul>
        <li>
          {`${returnKingSlug.books[0].ordinal}: "${returnKingSlug.books[0].title}"`}
        </li>
        <li>
          {`${returnKingSlug.books[1].ordinal}: "${returnKingSlug.books[1].title}"`}
        </li>
      </ul>
      <Image
        src="/images/the-fellowship-of-the-ring.png"
        alt={returnKingSlug.title}
        width={140}
        height={230}
      />
      ;
    </>
  );
}
