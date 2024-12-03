import { useContext } from 'react';
import { Modal, MainButton, FormContext, Canvas, TaskWindow } from '../../../shared/ui';

export function EditTask() {
	const { textInputState, textAreaState, textDateState, textTimeState, activeColor } = useContext(FormContext);
	return (
		<Modal>
			<Canvas width="774px">
				<TaskWindow title="Edit Task" />
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
		</Modal>
	);
}
