import {useCallback, useState} from "react";

import useTypedDispatch from "./useTypedDispatch";
import {UPDATE_STORIES_DELAY} from "../../constants";
import {storyActionCreator} from "../../store/reducers/story/action-creator";



export function useUpdateStories() {
    const dispatch = useTypedDispatch();
    const [intervalId, setIntervalId] = useState<NodeJS.Timer | number>(0)

    const setUpdateInterval = useCallback(() => {
        const id = setInterval(() =>  {
            dispatch(storyActionCreator.fetchNewStories())
        }, UPDATE_STORIES_DELAY)
        setIntervalId(id)
    }, [])

    function stopUpdate() {
        clearTimeout(intervalId)
        setIntervalId(0)
    }

    function startUpdate() {
        setUpdateInterval()
    }

    return {
        startUpdate,
        stopUpdate
    }
}