import { useContext } from 'react';
import { Canvas, MainButton } from '../../../shared/ui';
import { FormContext } from '../../../shared/ui/FormContext';
import { TaskWindow } from '../../../shared/ui/TaskWindow';

export function EditTask() {
	const { textInputState, textAreaState, textDateState, textTimeState, activeColor } = useContext(FormContext);
	return (
		<Canvas width="774px">
			<TaskWindow />
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
