import React, { useRef } from 'react'
import { MoviesCards } from '../components/MoviesCards';
import { useGetMovies } from '../hooks/useGetMovies';
import { Search } from '../components/Search';
import { MoviesContainer } from '../components/MoviesContainer';

export const BookStore = () => {

    const { states: { info }, updaters: { setSearchText } } = useGetMovies();
    
    return (
        <div>
            <Search updater={setSearchText}/>
            <MoviesContainer items={info}/>
        </div>
    )
}
