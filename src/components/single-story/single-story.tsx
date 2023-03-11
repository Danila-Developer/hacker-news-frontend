import React, {FC} from 'react';
import './single-story.css'
import IStory from "../../models/IStory";
import {timestampToDate} from "../../helpers/utils/timestampToDate";

interface SingleStoryProps {
    story: IStory | null;
}

const SingleStory:FC<SingleStoryProps> = ({story}) => {
    return (
        <>
            <article className={story ? 'single-story': 'single-story single-story_loading'}>
                {
                    story ?
                        <>
                            <h2 className='single-story__title'>{story.title}</h2>
                            <div className='single-story__time'>{story.by} {timestampToDate(story.time)}</div>
                            <div className='single-story__url'>Url: <a href={story.url}><span className='single-story__url__text'>{story.url}</span></a></div>
                        </>
                        :
                        <div className='single-story__loader'>
                            <img src={process.env.PUBLIC_URL + '/img/loader.svg'} className='single-story__loader__img' />
                        </div>
                }
            </article>
            <div className='single-story__comment-count'>Comments ({story?.kids?.length ? story?.kids?.length : 0})</div>
        </>
    );
};

export default SingleStory;