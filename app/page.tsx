'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchVideogame } from '../hooks/useVideogame';
import Videogame from '@/models/Videogame';



export default function Home() {
  const [posts, setPosts] = useState([]);
  const [videogames, setVideogames] = useState<Videogame[]>([]);
  useEffect(() => {
    const fetchVideogames = async () => {
      const videogamesList = await fetchVideogame();
      setVideogames(videogamesList);
    }
    fetchVideogames()
  }, [])
  return (
    <section>
      <h1>All Quizez</h1>
      <ul>
      {videogames.map((videogame) => {
        return <li>
          <Link href="/quiz/1"> { videogame.name }</Link>
        </li>
      })}
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
