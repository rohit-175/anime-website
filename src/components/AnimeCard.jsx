import React from 'react'

const AnimeCard = ({anime}) => {
  return (
    <div className='anime'>
      <div>
        <p>Score: {anime.score}</p>
        <p>Rating: {anime.rating}</p>
        <p>Genres: {anime.genres.map(genre => genre.name).join(', ')}</p>
        
      </div>
      <div>
        <img src={anime.images.jpg.image_url}></img>
      </div>
      <div>
        <span>{anime.title}</span>
      </div>
    </div>
  )
}

export default AnimeCard