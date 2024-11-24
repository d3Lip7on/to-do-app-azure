import React from 'react';

type CanvasProps = {
	children: React.ReactNode;
	width?: string;
};

export function Canvas({ children, width }: CanvasProps) {
	return (
		<div className="absolute bg-text-primary/70">
			<div className="flex justify-center items-center w-[100vw] h-[100vh]">
				<div className="p-[39px] bg-text-secondary flex flex-col  " style={{ width: width }}>
					{children}
				</div>
			</div>
		</div>
	);
}
