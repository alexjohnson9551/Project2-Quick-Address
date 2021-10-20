import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Location from '../models/location';

export type LocationState = Location[];

const initialState: LocationState = [];

const locationSlice = createSlice({
    name: 'location',
    initialState: initialState,
    reducers: {
        add: (state, action: PayloadAction<Location>) => {
            state.push(action.payload);
        },
        remove: (state, action: PayloadAction<Location>) => {
            state.splice(state.findIndex((loc => loc.id === action.payload.id)), 1);
        },
        update: (state, action: PayloadAction<Location>) => {
            let i = state.findIndex((loc => loc.id === action.payload.id));
            state[i] = action.payload;
        },
        addAll: (state, action: PayloadAction<Location[]>) => {
            state.push(...action.payload);
        },

    }
});

export const { add, remove, update ,addAll} = locationSlice.actions;
export default locationSlice.reducer;