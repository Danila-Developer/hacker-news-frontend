import React, {FC} from 'react';

import './story-list.css'
import IStory from "../../models/IStory";
import {TransitionGroup, CSSTransition} from "react-transition-group"
import Story from "../story/story";

interface StoryProps {
    stories: IStory[]
}

const StoryList:FC<StoryProps> = ({stories}) => {
    return (
        <div>
            <div className="container">
                <TransitionGroup>
                    {
                        stories.map(story =>
                            <CSSTransition
                                key={story.id}
                                timeout={300}
                                classNames={{
                                    enter: 'story_enter',
                                    enterActive: 'story_enter-active'
                                }}
                            >
                                <Story story={story}  />
                            </CSSTransition>
                        )
                    }
                </TransitionGroup>
            </div>
        </div>
    );
};

export default StoryList;