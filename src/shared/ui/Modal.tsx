import React from 'react';

type ModalProps = {
	children: React.ReactNode;
};

export function Modal({ children }: ModalProps) {
	return (
		<div className="absolute bg-text-primary/70">
			<div className="flex justify-center items-center w-[100vw] h-[100vh]">{children}</div>
		</div>
	);
}
