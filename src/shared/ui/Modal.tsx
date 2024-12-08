import React from 'react';

type ModalProps = {
	children: React.ReactNode;
};

export function Modal({ children }: ModalProps) {
	return (
		<div className="fixed top-0 left-0 bottom-0 right-0 bg-text-primary/70">
			<div className="flex justify-center items-center w-full h-full">{children}</div>
		</div>
	);
}
