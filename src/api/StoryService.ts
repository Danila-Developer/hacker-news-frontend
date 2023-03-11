import axios, {AxiosResponse, GenericAbortSignal} from "axios";
import IStory from "../models/IStory";
import {BASE_API_URL, ITEM_API_URL, NEW_STORIES_API_URL} from '../constants'


export default class StoryService {
    static async getStory(id: number): Promise<AxiosResponse<IStory>> {
        return axios.get<IStory>(BASE_API_URL+ITEM_API_URL+id+'.json');
    }

    static async fetchStories(storiesId: number[]): Promise<IStory[]> {
        const fetchedStories: IStory[] = await Promise.all(storiesId.map(async (storyId) => {
            return (await this.getStory(storyId)).data;
        }));
        return fetchedStories;
    }

    static async getFirstStories():Promise<IStory[]> {
        let storiesId = await (await axios.get<number[]>(BASE_API_URL+NEW_STORIES_API_URL)).data.slice(0, 100);
        const stories: IStory[] = await this.fetchStories(storiesId);
        return stories;
    }

    static async getNewStories(oldStories: IStory[]): Promise<IStory[]> {
        const newStoriesId: number[] = (await axios.get<number[]>(BASE_API_URL+NEW_STORIES_API_URL)).data;
        if (oldStories.length === 0) return [];
        const firstOldStoryId = oldStories[0].id;
        const notAddedStories: number[] = [];

        for (let i = 0; i < newStoriesId.length; i++) {
            if (newStoriesId[i] === firstOldStoryId) {
                break;
            }
            notAddedStories.push(newStoriesId[i]);
        }
        const newStories: IStory[] = await this.fetchStories(notAddedStories);

        return newStories;
    }


}