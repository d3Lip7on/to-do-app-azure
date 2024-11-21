import { useState } from 'react';

export function ColorBox({ color }: { color: string }) {
	const [isActive, setIsActive] = useState<boolean>(false);

	return (
		<div
			onClick={() => {
				setIsActive(!isActive);
			}}
			className="w-[86px] h-[86px] transition-transform duration-200 ease-in-out hover:scale-105 "
			style={{ background: color, border: isActive ? '3px solid black' : 'none' }}
		></div>
	);
}

export function SelectColor() {
	return (
		<div className="flex gap-[34px] mb-[53px] p-[20px]">
			<ColorBox color="#FBF868" />
			<ColorBox color="#ff3b30" />
			<ColorBox color="#34c759" />
			<ColorBox color="#007aff" />
			<ColorBox color="#00c7be" />
			<ColorBox color="#af52de" />
			<ColorBox color="#ff2d55" />
			<ColorBox color="#ff9500" />
		</div>
	);
}
