import { useContext } from 'react';
import { MainButton } from '../../../shared/ui';
import { Canvas } from '../../../shared/ui/Canvas';
import { TaskFormContext } from '../model/context/TaskFormProvider';
import { TaskWindow } from './TaskWindow';
import { createTask, TaskApiType } from '../../../entities/task/api';
import { TaskType } from '../../../entities/task';
import { colors } from '../model/data/colors';
import { useAuth } from '../../../app/providers/AuthProvider/AuthProvider';

type ModeType = 'create' | 'edit';

type TaskFormProps = {
	mode: ModeType;
	onSubmit: () => void;
	onDelete: () => void;
	onClose: () => void;
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

export function TaskForm({ mode, onClose }: TaskFormProps) {
	const { textInputState, textAreaState, textDateState, textTimeState, activeColor } = useFormState();

	const { token, logout } = useAuth();

	const title = getTaskTitle(mode);

	const handleCreate = async () => {
		if (token) {
			if (mode === 'create') {
				let due: string | undefined = undefined;
				if (textDateState) {
					due = textDateState;
					if (textTimeState) {
						due.concat(textTimeState);
					}
				}
				const task: TaskApiType = {
					id: '',
					title: textInputState,
					description: textAreaState,
					color: activeColor,
					isDone: false,
					due: due,
				};
				await createTask(task, token, logout);
				onClose();
			}
		} else {
			throw new Error('No token while using it');
		}
	};

	const handleDelete = () => {
		// TODO: handle this case
		console.log('Deleted task');
	};

	return (
		<Canvas width="774px">
			<TaskWindow onClose={onClose} title={title} />
			<div className="flex gap-[7px]">
				<MainButton onClick={handleCreate}>{mode === 'create' ? 'Create' : 'Save'}</MainButton>
				{mode === 'edit' && (
					<MainButton color="#FB686A" onClick={handleDelete}>
						Delete
					</MainButton>
				)}
			</div>
		</Canvas>
	);
}
