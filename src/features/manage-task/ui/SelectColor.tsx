import { ColorBox } from './ColorBox';
import { colors } from '../model/data/colors';

type SelectColorProps = {
	activeIndex: number | null;
	onClick: (newIndex: number) => void;
};

export function SelectColor({ activeIndex, onClick }: SelectColorProps) {
	return (
		<div className="flex gap-[25px] mb-[30px]">
			{colors.map((color, index) => {
				return (
					<ColorBox
						isActive={index == activeIndex}
						onClick={() => {
							onClick(index);
						}}
						color={color}
						key={color}
					/>
				);
			})}
		</div>
	);
}
