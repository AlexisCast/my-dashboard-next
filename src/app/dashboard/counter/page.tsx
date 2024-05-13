"use client";

import { useState } from "react";

// export const metadata = {
// 	title: "Couner Page",
// 	description: "Simple Counter",
// };

export default function CounterPage() {
	const [counter, setCounter] = useState(0);

	return (
		<div className="flex flex-col items-center justify-center w-full h-full">
			<span>Products in cart</span>
			<span className="text-9xl">{counter}</span>
			<div className="flex flex-row">
				<button
					className="flex items-center justify-center p-2  rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
					name="inc"
					onClick={() => setCounter((prevState) => prevState + 1)}
				>
					+1
				</button>
				<button
					className="flex items-center justify-center p-2  rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
					name="dec"
					onClick={() => setCounter((prevState) => prevState - 1)}
				>
					-1
				</button>
			</div>
		</div>
	);
}
