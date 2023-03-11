import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import NavButton from "../components/nav-button/nav-button";
import IStory from "../models/IStory";
import StoryService from "../api/StoryService";
import SingleStory from "../components/single-story/single-story";
import CommentList from "../components/comment-list/comment-list";

const SingleStoryWithComments:FC = () => {
    const {id} = useParams()
    const [story, setStory] = useState<IStory | null>(null)

    useEffect(() => {
        StoryService.getStory(Number(id))
            .then(response => {
                setStory(response.data)
            })
    }, [])

    return (
        <div className='container'>
            <NavButton to='/' text='Back' />
            <SingleStory story={story} />
            {
                story ? <CommentList kids={story.kids} /> : <></>
            }
        </div>
    );
};

export default SingleStoryWithComments;