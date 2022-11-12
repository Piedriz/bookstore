import React from 'react'
import { MoviesCards } from './MoviesCards'

export const MoviesContainer = ({items}) => {
  return (
    <div className='MoviesContainer'>
        {items.map(item=>{
            return(<MoviesCards key={item.id} movie={item}/>)
        })}
    </div>
  )
}
