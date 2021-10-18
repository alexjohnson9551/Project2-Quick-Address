import { PreLocation } from "./prelocation";

export default interface Location
{
    id: number | null
    userid: number,
    title: string,
    prelocation: PreLocation
}