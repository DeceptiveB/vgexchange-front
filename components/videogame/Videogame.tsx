import Videogame from '@/models/Videogame';
import React from 'react';

const Videogame = ({ videogame }: { videogame: Videogame}) => {
  return (
    <div className="text-center">
      <h1>{videogame.name}</h1>
      <h2>{videogame.developer}</h2>
      <h5>{videogame.argument}</h5>
    </div>
  )
}

export default Videogame