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
			className="w-[86px] h-[86px] transition-transform duration-200 ease-in-out hover:scale-105 "
			style={{ background: color, border: isActive ? '3px solid black' : 'none' }}
		></div>
	);
}
