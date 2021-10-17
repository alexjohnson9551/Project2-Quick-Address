import Address from '../../models/location';
import addressClient from './address.client';

export const getAddress = async (id: string | number): Promise<Address> => {
    const { data: address } = await addressClient.get<Address>(`/${id}`);

    return address;
}