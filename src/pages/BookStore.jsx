import React, { useRef } from 'react'
import { MoviesCards } from '../components/MoviesCards';
import { useFavorites } from '../hooks/useFavorites';
import { useGetMovies } from '../hooks/useGetMovies';

export const BookStore = () => {

    const { states: { info }, updaters: { setSearchText } } = useGetMovies();
    const searchMovieRef = useRef();

    const handleSearch = () => {
        setSearchText(searchMovieRef.current.value)
    }

    return (
        <div>
            <input type="text" placeholder='realize su busqueda' ref={searchMovieRef} />
            <button onClick={() => { handleSearch() }} type='button'>Buscar</button>
            {info.map(movie => {
                return (
                    <MoviesCards key={movie.id} movie={movie} />
                )
            })
            }
        </div>
    )
}
