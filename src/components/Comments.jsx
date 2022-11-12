import React from 'react'
import { useComments } from '../hooks/useComments'

export const Comments = ({movie}) => {

    const { comments, addComment } = useComments()

    const searchComments = (MovieID) => {
        const commentsD = (comments.filter(i => i.id === MovieID).map(i => { return (i.comment) }))
        if (commentsD[0] != null) {
            return (commentsD[0].map((i, _) => { return (<li key={_}>{i}</li>) }))
        } else {
            return null;
        }
    }
    const handleAddComment = () => {
        addComment(
            {
                id: movie.id,
                comment: [commentText.current.value]
            }
        )
    };


    const commentText = React.useRef()

    return (
        <div className='Comments'>
            <div className='Comments-box'>
                <ul>
                    {searchComments(movie.id)}
                </ul>
            </div>

            <div className='Comments-new'>
                <textarea ref={commentText} placeholder='comentario' type='text' />
                <button onClick={handleAddComment} type='button'>comentar</button>
            </div>
        </div>
    )
}
