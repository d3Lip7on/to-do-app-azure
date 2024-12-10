import React, { useEffect, useRef } from 'react';

type ModalProps = {
	children: React.ReactNode;
	onClose: () => void;
};

export function Modal({ children, onClose }: ModalProps) {
	const modalRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
			onClose();
		}
	};

	useEffect(() => {
		// Отключаем прокрутку при монтировании
		document.body.style.overflow = 'hidden';

		// Включаем прокрутку при размонтировании
		return () => {
			document.body.style.overflow = '';
		};
	}, []);

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className="fixed top-0 left-0 bottom-0 right-0 bg-text-primary/70 flex justify-center items-center">
			<div ref={modalRef} className="bg-white p-4 rounded shadow-lg">
				{children}
			</div>
		</div>
	);
}
