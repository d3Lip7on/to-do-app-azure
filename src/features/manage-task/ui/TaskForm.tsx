import { useContext } from 'react';
import { MainButton } from '../../../shared/ui';
import { Canvas } from '../../../shared/ui/Canvas';
import { TaskFormContext } from '../model/context/TaskFormProvider';
import { TaskWindow } from './TaskWindow';

type ModeType = 'create' | 'edit';

type TaskFormProps = {
	mode: ModeType;
	onSubmit: () => void;
	onDelete: () => void;
};

function useFormState() {
	const { textInputState, textAreaState, textDateState, textTimeState, activeColor } = useContext(TaskFormContext);
	return { textInputState, textAreaState, textDateState, textTimeState, activeColor };
}

function getTaskTitle(mode: ModeType): string {
	switch (mode) {
		case 'create':
			return 'New Task';
		case 'edit':
			return 'Edit Task';
		default:
			return '';
	}
}

export function TaskForm({ mode }: TaskFormProps) {
	const { textInputState, textAreaState, textDateState, textTimeState, activeColor } = useFormState();

	const title = getTaskTitle(mode);

	const handleCreate = () => {
		// TODO: handle this case
		console.log(textInputState, textAreaState, textDateState, textTimeState, activeColor);
	};

	const handleDelete = () => {
		// TODO: handle this case
		console.log('Deleted task');
	};

	return (
		<Canvas width="774px">
			<TaskWindow title={title} />
			<div className="flex gap-[7px]">
				<MainButton onClick={handleCreate}>{mode === 'create' ? 'Create' : 'Update'}</MainButton>
				{mode === 'edit' && (
					<MainButton color="#FB686A" onClick={handleDelete}>
						Delete
					</MainButton>
				)}
			</div>
		</Canvas>
	);
}
