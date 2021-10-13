import Location from "../../models/user";
import locationClient from "./location.client";

export const getLocation = async (id: number): Promise<Location> => {
    console.log(id);
    const {data:location} = await locationClient.get<Location>(`/${id}`);
    return location;
}

export const createLocation = async (id: number): Promise<Location> => {
    console.log(id);
    const {data:location} = await locationClient.post<Location>(`/`);
    return location;
}
