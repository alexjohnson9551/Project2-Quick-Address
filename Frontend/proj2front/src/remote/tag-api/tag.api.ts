import Tag from "../../models/tag";
import tagClient from "./tag.client";


export const getTag = async (id: number): Promise<Tag> => {
    console.log(id);
    const {data:tag} = await tagClient.get<Tag>(`/${id}`);
    return tag;
}

