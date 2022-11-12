import React from 'react'
import { BooksCards } from './BooksCards'

export const CardsContainer = ({ items }) => {
    return (
        <div className='CardsContainer'>
            {items.map(item => {
                return (<BooksCards key={item.id} book={item}/>)
            })}
        </div>
    )
}
