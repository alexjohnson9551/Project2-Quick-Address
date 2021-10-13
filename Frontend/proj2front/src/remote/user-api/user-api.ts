import User from "../../models/user";
import userClient from "./user-client";

export const getUser = async (id: number): Promise<User> => {
    console.log(id);
    const {data:user} = await userClient.get<User>(`/${id}`);
    return user;
}