import React from "react";
import {useCounterStore} from "../hooks/useCounterStore";

const Counter = () => {

	const {
		counter,
		counterIncrement,
		counterDecrement,
	} = useCounterStore();

	return (
		<div>
			<h1>
				{counter}
			</h1>
			<button onClick={counterIncrement}>
				+1
			</button>
			<button onClick={counterDecrement}>
				-1
			</button>
		</div>
	);
};

export default React.memo(Counter);
