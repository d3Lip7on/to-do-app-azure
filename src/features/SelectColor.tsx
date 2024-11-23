import { colors } from './model/data/colors';
import { ColorBox } from './ColorBox';

type SelectColorProps = {
	activeIndex: number | null;
	onClick: (newIndex: number) => void;
};

export function SelectColor({ activeIndex, onClick }: SelectColorProps) {
	return (
		<div className="flex gap-[34px] mb-[53px] p-[20px]">
			{colors.map((color, index) => {
				return (
					<ColorBox
						isActive={index == activeIndex}
						onClick={() => {
							onClick(index);
						}}
						color={color}
					/>
				);
			})}
		</div>
	);
}
