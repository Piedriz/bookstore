import React, { useRef } from 'react'
import { useGetBooks } from '../hooks/useGetBooks'

export const Home = () => {

    const {states:{info},updaters:{setSearchText}} = useGetBooks();
    const searchRef = useRef();
    console.log(info)

    const handleSearch = () =>{
        setSearchText(searchRef.current.value)
    }
    return (
        <div>
            <input type="text" placeholder='realize su busqueda' ref={searchRef}/>
            <button onClick={()=>{handleSearch()}} type='button'>Buscar</button>
            {info.map(book =>{
                return (<ul key={book.id}><li>{book.volumeInfo.title}</li></ul>)
            })}
        </div>
    )
}
