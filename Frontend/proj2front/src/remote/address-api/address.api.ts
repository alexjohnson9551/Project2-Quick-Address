import Address from '../../models/location';
import addressClient from './address.client';

export const getAddress = async (id: string | number): Promise<Address> => {
    const { data: address } = await addressClient.get<Address>(`/${id}`);

    return address;
}

export const deleteAddress = async (id: string | number |null): Promise<number> => {
    const { data: returned } = await addressClient.delete<number>(`/${id}`);
    return returned;

}

export const getAllAddress = async (): Promise<Address[]> => {
    
    const { data: address } = await addressClient.get<Address[]>(`/`);

    return address;
}