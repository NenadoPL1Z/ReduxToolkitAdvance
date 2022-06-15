import {combineReducers} from "redux";
import counterReducer from "./reducers/counterSlice";
import {userApi} from "../services/userApi";

export const rootReducers = combineReducers({
	counterReducer,
	[userApi.reducerPath]: userApi.reducer,
})
