import React from 'react';

type MainButtonProps = {
	width?: string;
	children: React.ReactNode;
	onClick: () => void;
	color?: string;
};

export function MainButton({ width, children, onClick, color }: MainButtonProps) {
	return (
		<button onClick={onClick} style={{ width: width, background: color }} className="flex justify-center items-center transition-transform duration-200 ease-in-out hover:scale-105 hover:filter hover:contrast-[400%] active:scale-95 active:transition w-[100%] p-[15px] h-[64px] bg-accent text-[30px] font-bold">
			{children}
		</button>
	);
}
