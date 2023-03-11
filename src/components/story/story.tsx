import React, {FC} from 'react';
import './story.css'
import IStory from "../../models/IStory";
import {timestampToDate} from "../../helpers/utils/timestampToDate";
import {Link} from "react-router-dom";

interface StoryProps {
    story: IStory;
}

const Story:FC<StoryProps> = ({story}) => {
    return (
        <Link to={'/story/' + story.id} >
            <article className='story'>
                <h2 className='story__title'>{story.title}</h2>
                <div className='story__time'>{story.by} {timestampToDate(story.time)}</div>
                <div className='story__score'>Score: {story.score}</div>
            </article>
        </Link>
    );
};

export default Story;