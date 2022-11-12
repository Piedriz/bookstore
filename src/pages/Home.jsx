import React, { useRef } from 'react'
import { useGetBooks } from '../hooks/useGetBooks'
import { Search } from '../components/Search';
import { CardsContainer } from '../components/BooksContainer';

export const Home = () => {

    const {states:{info},updaters:{setSearchText}} = useGetBooks();
    
    return (
        <div>
            <Search updater={setSearchText}/>
            <CardsContainer items={info}/>
        </div>
    )
}
