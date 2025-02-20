"use client";

import React, { useState } from "react";

interface Props {
	value?: number;
}

export const CartCounter = ({ value = 10 }: Props) => {
	const [counter, setCounter] = useState(value);

	return (
		<>
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
		</>
	);
};
