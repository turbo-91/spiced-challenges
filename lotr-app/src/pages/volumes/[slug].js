import Link from "next/link";
import React from "react";
import { volumes } from "@/src/data/data";
import Image from "next/image";
import { useRouter } from "next/router";

export default function VolumeDetails() {
  const router = useRouter();
  const { slug } = router.query;
  const thisVolume = volumes.find((volume) => volume.slug === slug);
  const { title, description, books, cover } = thisVolume;

  return (
    <>
      <Link href={`/volumes/`}>All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map((book) => (
          <li key={slug}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image src={cover} alt={title} width={140} height={230} />;
    </>
  );
}
