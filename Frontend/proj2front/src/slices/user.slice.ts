import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from '../models/user';

export type UserState = User[];

const initialState: UserState = [{
    userID: 0,
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
}];

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        set: (state, action: PayloadAction<User>) => {
            state.pop();
            state.push(action.payload);
        },
        unset: (state) => {
            state = initialState;
        }
    }
});

export const { set, unset } = userSlice.actions;
export default userSlice.reducer;