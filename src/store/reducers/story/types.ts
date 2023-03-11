import IStory from "../../../models/IStory";

export interface IStoryState {
    stories: IStory[];
    isLoading: boolean;
}

export enum StoryActionTypes {
    ADD_STORY = 'ADD_STORY',
    FETCH_STORIES = 'FETCH_STORIES',
    SET_LOADING = 'SET_LOADING'
}

export interface AddStoryAction {
    type: StoryActionTypes.ADD_STORY;
    payload: IStory[];
}

export interface FetchStoriesAction {
    type: StoryActionTypes.FETCH_STORIES;
}

export interface SetLoadingAction {
    type: StoryActionTypes.SET_LOADING;
    payload: boolean;
}

export type StoryAction =
    AddStoryAction      |
    FetchStoriesAction  |
    SetLoadingAction