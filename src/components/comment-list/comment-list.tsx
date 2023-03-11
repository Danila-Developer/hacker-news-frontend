import React, {FC, useEffect, useState} from 'react';
import './comment-list.css'
import CommentService from "../../api/CommentService";
import IComment from "../../models/IComment";
import Comment from "../comment/comment";
import LoaderButton from "../loader-button/loader-button";

interface CommentListProps {
    kids?: number[]
}

const CommentList:FC<CommentListProps> = ({kids}) => {
    const [comments, setComments] = useState<IComment[]>([])

    const  loadComments = async () => {
        if (kids?.length) {
            const commentList = await CommentService.fetchCommentsOfItem(kids)
            setComments([...commentList])
        }
    }

    useEffect(() => {
        loadComments()
    }, [])

    return (
        <div>
            <LoaderButton callback={loadComments} />
            {
                comments.map(comment =>
                    <Comment comment={comment} key={comment.id} />
                )
            }
        </div>
    );
};

export default CommentList;