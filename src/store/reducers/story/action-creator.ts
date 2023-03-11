import {AddStoryAction, SetLoadingAction, StoryActionTypes} from "./types";
import IStory from "../../../models/IStory";
import {AppDispatch} from "../../index";
import StoryService from "../../../api/StoryService";


export const storyActionCreator = {
    setLoading: (isLoading: boolean): SetLoadingAction => ({type: StoryActionTypes.SET_LOADING, payload: isLoading}),
    addStories: (stories: IStory[]): AddStoryAction => ({type: StoryActionTypes.ADD_STORY, payload: stories}),
    fetchNewStories: () => async (dispatch: AppDispatch, getState: any) => {
        try {
            const oldStories: IStory[] = getState().story.stories
            if (oldStories.length === 0) return
            const newStories = await StoryService.getNewStories(oldStories)
            if (!newStories.filter(story => story.id === null).length) dispatch(storyActionCreator.addStories(newStories))
        } catch (e) {}
    },
    fetchFirstStories: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(storyActionCreator.setLoading(true))
            const stories: IStory[] = await StoryService.getFirstStories();
            dispatch(storyActionCreator.addStories(stories));
            dispatch(storyActionCreator.setLoading(false))
        } catch (e) {}
    },
}