import React, { useRef } from 'react'
import { useFavorites } from '../hooks/useFavorites';
import { Comments } from './Comments';

export const MoviesCards = ({ movie }) => {

    const { addFavorite } = useFavorites();

    
    const handleAddToFavorite = () => {
        addFavorite(movie)
    };
    
    const BASE_URL = 'https://image.tmdb.org/t/p/w200';
    return (
        <div className='MoviesCard'>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <img src={BASE_URL + movie?.poster_path} alt={movie.title + ' portada'} />
            <button type='button' onClick={handleAddToFavorite}>favorito</button>
            <Comments movie={movie}/>
        </div>
    )
}
