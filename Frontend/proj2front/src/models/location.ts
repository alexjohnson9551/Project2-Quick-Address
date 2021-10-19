export default interface Location
{
    id: number | null
    userID: number | null,
    title: string | null,
    address: string,
    lat: number,
    lng: number
}