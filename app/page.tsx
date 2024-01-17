'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchVideogame } from '../hooks/useVideogame';
import Videogame from '@/models/Videogame';



export default function Home() {
  const [posts, setPosts] = useState([]);
  const [videogames, setVideogames] = useState<Videogame[]>([]);
  console.log("asdfasdf")
  useEffect(() => {
    const fetchVideogames = async () => {
      try{
        const videogamesList = await fetchVideogame();
        setVideogames(videogamesList);
        console.log(videogames)
      }
      catch (e: any){
        console.error(e);
        return
      }
    }
    fetchVideogames()
  }, [])
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
