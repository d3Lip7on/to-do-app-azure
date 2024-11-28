import { useState, useContext } from 'react';
import { Canvas, MainButton } from '../../../shared/ui';

export function EditTask() {
	const { textInputState, textAreaState, textDateState, textTimeState, activeColor } = useContext(For);
	return (
		<Canvas width="774px">
			<div className="flex gap-[7px]">
				<MainButton
					onClick={() => {
						console.log(textInputState, textAreaState, textDateState, textTimeState, activeColor);
					}}
				>
					Create
				</MainButton>
				<MainButton
					color="#FB686A"
					onClick={() => {
						console.log('Deleted text');
					}}
				>
					Delete
				</MainButton>
			</div>
		</Canvas>
	);
}
