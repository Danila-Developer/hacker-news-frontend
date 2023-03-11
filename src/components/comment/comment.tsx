import React, {FC, useState} from 'react';

import './comment.css'
import IComment from "../../models/IComment";
import {timestampToDate} from "../../helpers/utils/timestampToDate";
import KidCommentsList from "../kid-comment-list/kid-comments-list";

interface CommentProps {
    comment: IComment;
}

const Comment:FC<CommentProps> = ({comment}) => {
    const [isKidsVisible, setIsKidsVisible] = useState<boolean>(false)

    const setKidCommentsVisibleHandler = () => {
        if (comment.kids?.length) setIsKidsVisible(!isKidsVisible)
    }

    return (
        <div className='comment'>
            <div className='comment__by'>{comment.by}</div>
            <div className='comment__time'>{timestampToDate(comment.time)}</div>
            <div className='comment__text' dangerouslySetInnerHTML={{__html: comment.text}}></div>
            <div className='comment__kids' onClick={setKidCommentsVisibleHandler}>Comments: ({comment.kids?.length ? comment.kids?.length : 0})</div>
            { isKidsVisible ? <KidCommentsList kids={comment.kids} /> : <></> }
        </div>
    );
};

export default Comment;