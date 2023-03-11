import React, {FC, useEffect, useState} from 'react';
import './kid-comment-list.css'
import IComment from "../../models/IComment";
import CommentService from "../../api/CommentService";
import KidComment from "../kid-comment/kid-comment";

interface KidCommentsListProps {
    kids: number[];
}

const KidCommentsList:FC<KidCommentsListProps> = ({kids}) => {
    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        if (kids.length) {
            CommentService.fetchCommentsOfItem(kids)
                .then(commentList => setComments([...commentList]))
        }

    })

    return (
        <div className='kid-comments-list'>
            {
                comments.map(comment =>
                    <KidComment comment={comment} key={comment.id}/>
                )
            }
        </div>
    );
};

export default KidCommentsList;