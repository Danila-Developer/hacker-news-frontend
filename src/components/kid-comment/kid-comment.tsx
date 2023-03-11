import React, {FC, useState} from 'react';
import './kid-comment.css'
import IComment from "../../models/IComment";
import {timestampToDate} from "../../helpers/utils/timestampToDate";
import KidCommentsList from "../kid-comment-list/kid-comments-list";

interface KidCommentProps {
    comment: IComment;
}

const KidComment:FC<KidCommentProps> = ({comment}) => {
    const [isVisibleKids, setIsVisibleKids] = useState<boolean>(false)

    const setKidCommentsVisibleHandler = () => {
        if (comment.kids?.length) setIsVisibleKids(!isVisibleKids)
    }

    return (
        <div className='kid-comment'>
            <div className='comment__by'>{comment.by}</div>
            <div className='comment__time'>{timestampToDate(comment.time)}</div>
            <div className='comment__text' dangerouslySetInnerHTML={{__html: comment.text}}></div>
            <div className='comment__kids' onClick={setKidCommentsVisibleHandler} >Comments: ({comment.kids?.length ? comment.kids?.length : 0})</div>
            { isVisibleKids ? <KidCommentsList kids={comment.kids} /> :<></> }
        </div>
    );
};

export default KidComment;