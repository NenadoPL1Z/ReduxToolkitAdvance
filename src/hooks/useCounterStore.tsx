import {counterSlice, useCounterSlice} from "../store/reducers/counterSlice";
import {useAppDispatch} from "./useReduxHooks";

export const useCounterStore = () => {
	const { counter } = useCounterSlice();
	const dispatch = useAppDispatch();

	const counterIncrement = () => {
		dispatch(counterSlice.actions.increment());
	}

	const counterDecrement = () => {
		dispatch(counterSlice.actions.decrement());
	}

	return {
		counter,
		counterIncrement,
		counterDecrement,
	}
}
