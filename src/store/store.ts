import {configureStore} from "@reduxjs/toolkit";
import {rootReducers} from "./rootReducers";
import {userApi} from "../services/userApi";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
	reducer: rootReducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(userApi.middleware),
})

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
