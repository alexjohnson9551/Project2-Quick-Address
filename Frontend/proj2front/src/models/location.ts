export type Address = {
    country?:string | null
    city?:string | null
    state?:string | null
    street?:string | null
    number?:number | null
}

export default interface Location {
    longitude:number;
    latitude:number;
    title:string;
    description:string;
    notes:string;
    address:Address;
}