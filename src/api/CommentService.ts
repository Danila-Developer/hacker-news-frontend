import axios, {AxiosResponse} from "axios";
import IComment from "../models/IComment";
import {BASE_API_URL, ITEM_API_URL} from "../constants";

export default class CommentService {
    static async fetchComment(commentId: number): Promise<AxiosResponse<IComment>>  {
        return await axios.get<IComment>(BASE_API_URL+ ITEM_API_URL + commentId + '.json')
    }

    static async fetchCommentsOfItem(kids: number[]): Promise<IComment[]> {
        const comments = await Promise.all(kids.map(async kid => (await this.fetchComment(kid)).data))
        return comments
    }
}