import { useState } from 'react';
import { Canvas, MainButton } from '../shared/ui';
import { SelectColor } from './SelectColor';

export function CreateTask() {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	function clickHandler(index: number) {
		setActiveIndex(index);
	}
	return (
		<div>
			<Canvas width="1032px">
				<h1 className="text-[64px] font-bold">New task</h1>
				<SelectColor onClick={clickHandler} activeIndex={activeIndex} />
				<MainButton
					color="FBF868"
					onClick={() => {
						console.log('Created task!');
					}}
				>
					Create
				</MainButton>
			</Canvas>
		</div>
	);
}
