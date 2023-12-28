import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feature/userSlice/userSlice";
import { api } from "./feature/apiSlice/apiSlice";
import { collabapi } from "./feature/collabdataSlice/collabdataSlice";

export const store = configureStore({
    reducer: { 
        user: userReducer,
        [api.reducerPath]: api.reducer, 
        [collabapi.reducerPath]: collabapi.reducer 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});


export default store;


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
