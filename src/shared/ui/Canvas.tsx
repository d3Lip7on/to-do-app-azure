import React from 'react';

export function Canvas({ children }: { children?: React.ReactNode }) {
	return (
		<div className="flex justify-center items-center w-[100vw] h-[100wh] bg-black/70">
			<div className="w-[1032px] h-[977px] p-[53px] bg-[#fff] flex flex-col items-center ">{children}</div>
		</div>
	);
}
