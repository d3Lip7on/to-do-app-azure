type ColorBoxProps = {
	color: string;
	isActive: boolean;
	onClick: () => void;
};

export function ColorBox({ color, isActive, onClick }: ColorBoxProps) {
	return (
		<div
			onClick={() => {
				onClick();
			}}
			className="w-[64px] h-[64px] transition-transform duration-200 ease-in-out hover:scale-105 "
			style={{ background: color, border: isActive ? '2px solid black' : 'none' }}
		></div>
	);
}
