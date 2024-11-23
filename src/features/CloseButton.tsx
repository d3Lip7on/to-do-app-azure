export function CloseButton({ onClick }: { onClick: () => void }) {
	return (
		<div className="absolute right-0 top-[50%] translate-y-[-50%] ">
			<img onClick={onClick} className="transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 active:transition cursor-pointer" src="/icons/close-button.svg" alt="close-button" />
		</div>
	);
}
