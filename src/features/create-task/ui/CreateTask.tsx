import { useContext } from 'react';
import { Modal, MainButton, FormContext, TaskWindow } from '../../../shared/ui';
import { Canvas } from '../../../shared/ui/Canvas';

export function CreateTask() {
	const { textInputState, textAreaState, textDateState, textTimeState, activeColor } = useContext(FormContext);
	return (
		<Modal>
			<Canvas width="774px">
				<TaskWindow title="New Task" />
				<MainButton
					onClick={() => {
						console.log(textInputState, textAreaState, textDateState, textTimeState, activeColor);
					}}
				>
					Create
				</MainButton>
			</Canvas>
		</Modal>
	);
}
