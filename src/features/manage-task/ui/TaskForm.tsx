import { useContext, useState } from 'react';
import { MainButton, DotsLoader } from '../../../shared/ui';
import { Canvas } from '../../../shared/ui/Canvas';
import { TaskFormContext } from '../model/context/TaskFormProvider';
import { TaskWindow } from './TaskWindow';
import { createTask, deleteTask, editTask } from '../../../entities/task/api';
import { useAuth } from '../../../app/providers/AuthProvider/AuthProvider';
import { parseDateToStringStandart } from '../../../shared/lib';
import { TaskApiType } from '../../../entities/task/model';
type ModeType = 'create' | 'edit';

type TaskFormProps = {
	mode: ModeType;
	onClose: () => void;
};

function useFormState() {
	const { textInputState, textAreaState, textDateState, textTimeState, activeColor, id } = useContext(TaskFormContext);
	return { textInputState, textAreaState, textDateState, textTimeState, activeColor, id };
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
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isLoadingDelete, setIsLoadingDelete] = useState<boolean>(false);

	const { textInputState, textAreaState, textDateState, textTimeState, activeColor, id } = useFormState();

	const { token, logout } = useAuth();

	const title = getTaskTitle(mode);

	const handleCreate = async () => {
		setIsLoading(!isLoading);
		if (token) {
			if (mode === 'create') {
				let due: string | undefined = undefined;

				if (textDateState != '') {
					due = textDateState;
				} else {
					const currentDate = new Date();
					due = parseDateToStringStandart(currentDate);
				}

				if (textTimeState != '') {
					due = `${due}T${textTimeState}`;
				}

				const task: TaskApiType = {
					id: id,
					title: textInputState,
					description: textAreaState,
					color: activeColor,
					isDone: false,
					due: due,
				};
				await createTask(task, token, logout);
				onClose();
			}
			if (mode == 'edit') {
				let due: string | undefined = undefined;
				if (textDateState != '') {
					due = textDateState;
				} else {
					const currentDate = new Date();
					due = parseDateToStringStandart(currentDate);
				}

				if (textTimeState != '') {
					due = `${due}T${textTimeState}`;
				}

				const task: TaskApiType = {
					id: id,
					title: textInputState,
					description: textAreaState,
					color: activeColor,
					isDone: false,
					due: due,
				};
				await editTask(task, token, logout);
				onClose();
			}
		} else {
			setIsLoading(isLoading);
			throw new Error('No token while using it');
		}
	};

	const handleDelete = async () => {
		setIsLoadingDelete(!isLoadingDelete);
		try {
			await deleteTask(id, token, logout);
			onClose();
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoadingDelete(isLoadingDelete);
		}
	};

	return (
		<Canvas width="774px">
			<TaskWindow onClose={onClose} title={title} />
			<div className="flex gap-[7px]">
				<MainButton onClick={handleCreate}>
					{mode === 'create' ? isLoading ? <DotsLoader /> : 'Create' : isLoading ? <DotsLoader /> : 'Save'}
				</MainButton>
				{mode === 'edit' && (
					<MainButton color="#FB686A" onClick={handleDelete}>
						{isLoadingDelete ? <DotsLoader /> : 'Delete'}
					</MainButton>
				)}
			</div>
		</Canvas>
	);
}
