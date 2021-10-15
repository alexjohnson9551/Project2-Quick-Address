import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
 import locationReducer from './slices/location.slice';


// export const store = configureStore({
//     reducer: {
//         pokemon: pokemonReducer,
//     }
// });

export const store = configureStore({
    reducer: {
        location: locationReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction <
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;