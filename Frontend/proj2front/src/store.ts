import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import locationReducer from './slices/location.slice';
import userReducer from './slices/user.slice';



export const store = configureStore({
    reducer: {
        location: locationReducer,
        user: userReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;