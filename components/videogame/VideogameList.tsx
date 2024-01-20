import videogame from '@/models/Videogame'
import React from 'react'
import Videogame from './Videogame'

const VideogameList = ({ videogames } : {videogames: Videogame[]}) => {
    const videogameList = videogames as Videogame[];
  return (
    <div>
    {videogameList.length > 0 && videogameList.map((videogame) => (
        <Videogame videogame={{
            name: videogame.name,
            releaseDate: videogame.releaseDate,
            id: videogame.id,
            developer: videogame.developer,
            argument: videogame.argument,
            genres: videogame.genres
        }} />
    ))}
    </div>
  )
}

export default VideogameList