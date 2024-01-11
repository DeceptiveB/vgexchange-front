import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useFetchPokemonWithPagination } from '../hooks/useVideogame';

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {

  }, [])
  return (
    <section>
      <h1>All Quizez</h1>
      <ul>
        <li>
          <Link href="/quiz/1"> { data[0].body }</Link>
        </li>
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
