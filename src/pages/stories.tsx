import React, {FC, useEffect} from 'react';

import LoaderButton from "../components/loader-button/loader-button";
import StoryList from "../components/story-list/story-list";
import Loader from "../components/loader/loader";
import useTypedDispatch from "../helpers/hooks/useTypedDispatch";
import {useTypedSelector} from "../helpers/hooks/useTypedSelector";
import {useUpdateStories} from "../helpers/hooks/useUpdateStories";
import {storyActionCreator} from "../store/reducers/story/action-creator";

const Stories: FC = () => {
    const dispatch = useTypedDispatch()
    const {stories, isLoading} = useTypedSelector(store => store.story)
    const {stopUpdate, startUpdate} = useUpdateStories()

    useEffect(() => {
        if (stories.length === 0) {
            dispatch(storyActionCreator.fetchFirstStories())
                .then(() => startUpdate())
        } else {
            startUpdate()
        }
        return () => {
            //stopUpdate()
        }
    }, [])

    const loaderButtonHandler = async () => {
        stopUpdate()
        await dispatch(storyActionCreator.fetchNewStories())
        startUpdate()
    }
    return (
        <div>
            {
                !isLoading?
                    <>
                        <LoaderButton callback={loaderButtonHandler} />
                        <StoryList stories={stories} />
                    </>

                    : <Loader />
            }
        </div>
    );
};

export default Stories;