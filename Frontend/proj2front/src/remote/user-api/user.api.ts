import User from "../../models/user";
import userClient from "./user.client";

export const getUser = async (id: number): Promise<User> => {
    console.log(id);
    const {data:user} = await userClient.get<User>(`/${id}`);
    return user;
}

export const createUser = async (id: number): Promise<User> => {
    console.log(id);
    const {data:user} = await userClient.post<User>(`/`);
    return user;
}

export const updateUser = async (id: number): Promise<User> => {
    console.log(id);
    const {data:user} = await userClient.put<User>(`/${id}`);
    return user;
}