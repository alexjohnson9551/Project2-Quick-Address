import Location from '../../models/location';
import locationClient from './location.client';

export const getLocation = async ( id: string | number ): Promise<Location> =>
{
    const { data: location } = await locationClient.get<Location>( `/${ id }` );
    return location;
}

export const getAllLocation = async (): Promise<Location[]> =>
{
    const { data: location } = await locationClient.get<Location[]>( `/` );
    return location;
}

export const postLocation = async ( toSend: Location ): Promise<Location> =>
{
    const { data: location } = await locationClient.post<Location>( `/`, toSend );
    return location;
}

export const putLocation = async ( id: string | number, toSend: Location ): Promise<Location> =>
{
    const { data: location } = await locationClient.put<Location>( `/${ id }`, toSend );
    return location;
}

export const deleteLocation = async ( id: string | number ): Promise<number> =>
{
    const { data: returned } = await locationClient.delete<number>( `/${ id }` );
    return returned;
}
