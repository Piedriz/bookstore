import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useComments() {
    // const {
    //     item: commentsItems,
    //     saveItem: saveComment,
    //     loading,
    //     error,
    // } = useLocalStorage(
    //     'COMMENTS', []);

    const [comments, setComments] = React.useState([])

    React.useEffect(() => {
        const favoriteItems = localStorage.getItem('COMMENTS')
        if (!favoriteItems) {
            localStorage.setItem('COMMENTS', JSON.stringify([]));
            setComments([])
        } else {
            setComments(JSON.parse(localStorage.getItem('COMMENTS')))
        }
    }, [])



    const addComment = (payload) => {
        const allComents = JSON.parse(localStorage.getItem('COMMENTS'));

        const found = allComents.map(i => i.id).indexOf(payload.id);

        if (found > -1) {
            allComents[found].comment.push(payload.comment.join())
            localStorage.setItem('COMMENTS', JSON.stringify(allComents));
            setComments(allComents)

        } else {
            const newCommentArray = [...allComents, payload];
            localStorage.setItem('COMMENTS', JSON.stringify(newCommentArray));
            setComments(newCommentArray)

        }

    }
    return ({ comments, addComment, })
}