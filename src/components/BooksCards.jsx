import React from 'react'

export const BooksCards = ({book}) => {
  return (
    <ul>
        <li>{book.volumeInfo.title}</li>
    </ul>
  )
}
