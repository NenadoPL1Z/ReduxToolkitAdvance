import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useAppSelector} from "../../hooks/useReduxHooks";

interface IInitialState {
	counter: number;
}

const initialState: IInitialState = {
	counter: 0,
}

export const counterSlice = createSlice({
	name: 'counterSlice',
	initialState,
	reducers: {
		increment(state) {
			state.counter += 1;
		},
		decrement(state) {
			state.counter -= 1;
		},
		customNumber(state, action: PayloadAction<number>) {
			state.counter = action.payload;
		},
	},
	extraReducers: {},
})

export const useCounterSlice = () => useAppSelector(state => state.counterReducer);
export default counterSlice.reducer;
