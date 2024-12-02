import { useContext } from 'react';
import { Canvas, MainButton } from '../../../shared/ui';
import { TaskWindow } from '../../../shared/ui/TaskWindow';
import { FormContext } from '../../../shared/ui/FormContext';

export function CreateTask() {
	const { textInputState, textAreaState, textDateState, textTimeState, activeColor } = useContext(FormContext);
	return (
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
	);
}
