import React, { useRef } from 'react'
import { useFavorites } from '../hooks/useFavorites';
import { useComments } from '../hooks/useComments';

export const MoviesCards = ({ movie }) => {

    const { comments, addComment } = useComments()
    const { addFavorite } = useFavorites();



    const searchComments = (MovieID) => {
        const commentsD = (comments.filter(i => i.id === MovieID).map(i => { return (i.comment)}))
        if(commentsD[0] != null){
            return(commentsD[0].map((i,_)=>{return(<li key={_}>{i}</li>)}))
        }else{
            return null;
        }
    }

    const commentText = useRef()

    const handleAddToFavorite = () => {
        addFavorite(movie)
    };
    const handleAddComment = () => {
        addComment(
            {
                id: movie.id,
                comment: [commentText.current.value]
            }
        )
    };

    const BASE_URL = 'https://image.tmdb.org/t/p/w200';
    return (
        <div>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <img src={BASE_URL + movie?.poster_path} alt={movie.title + ' portada'} />
            <button type='button' onClick={handleAddToFavorite}>favorito</button>
            <div>
                <ul>
                    {searchComments(movie.id)}
                </ul>
            </div>
            <textarea ref={commentText} placeholder='comentario' type='text' />
            <button onClick={handleAddComment} type='button'>comentar</button>

        </div>
    )
}
