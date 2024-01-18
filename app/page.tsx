import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchVideogame } from '../lib/useVideogame';
import Videogame from '@/models/Videogame';

const fetchVideogames = async () => {
  const videogames = await fetchVideogame();
  return videogames;
}

export default async function Home() {
  const videogames = await fetchVideogames() as Videogame[];
  return (
    <section>
      <h1>All Quizez</h1>
      <ul>
      {videogames.length > 0 && videogames.map((videogame) => (
        <li>
          <Link href="/quiz/1"> { videogame.name }</Link>
        </li>
      ))}
        <li>
          <Link href="/quiz/2"> Quiz 2</Link>
        </li>
        <li>
          <Link href="/quiz/3"> Quiz 3</Link>
        </li>
      </ul>
    </section>
  )
}
