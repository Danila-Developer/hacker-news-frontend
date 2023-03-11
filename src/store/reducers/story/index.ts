import {IStoryState, StoryAction, StoryActionTypes} from "./types";

const initialState: IStoryState = {
    stories: [],
    isLoading: false
}

export function storyReducer(state = initialState, action: StoryAction): IStoryState {
    switch (action.type) {
        case StoryActionTypes.ADD_STORY:
            return {
                ...state,
                stories: [
                    ...action.payload,
                    ...state.stories
                ].slice(0, 100)
            }
        case StoryActionTypes.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}