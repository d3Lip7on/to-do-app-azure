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
	return mode === 'create' ? 'New Task' : 'Edit Task';
}

function getDueDate(textDateState: string, textTimeState: string): string {
	let due: string = '';

	if (textDateState != '') {
		due = textDateState;
	} else {
		const currentDate = new Date();
		due = parseDateToStringStandart(currentDate);
	}

	if (textTimeState != '') {
		due += `T${textTimeState}`;
	}
	return due;
}

function buildTask(
	id: number,
	textInputState: string,
	textAreaState: string,
	activeColor: string,
	due: string
): TaskApiType {
	return {
		id,
		title: textInputState,
		description: textAreaState,
		color: activeColor,
		isDone: false,
		due,
	};
}

export function TaskForm({ mode, onClose }: TaskFormProps) {
	const [isLoadingSubmit, setIsLoadingSubmit] = useState<boolean>(false);
	const [isLoadingDelete, setIsLoadingDelete] = useState<boolean>(false);

	const { textInputState, textAreaState, textDateState, textTimeState, activeColor, id } = useFormState();

	const { token, logout } = useAuth();

	const title = getTaskTitle(mode);

	const handleSubmit = async () => {
		if (token) {
			if (mode === 'create') {
				setIsLoadingSubmit(true);
				const due = getDueDate(textDateState, textTimeState);
				const task = buildTask(id, textInputState, textAreaState, activeColor, due);
				try {
					await createTask(task, token, logout);
					onClose();
				} catch (err) {
					alert(err);
				} finally {
					setIsLoadingSubmit(false);
				}
			}
			if (mode == 'edit') {
				setIsLoadingSubmit(true);
				const due = getDueDate(textDateState, textTimeState);
				const task = buildTask(id, textInputState, textAreaState, activeColor, due);
				try {
					await editTask(task, token, logout);
					onClose();
				} catch (err) {
					alert(err);
				} finally {
					setIsLoadingSubmit(false);
				}
			}
		} else {
			throw new Error('No token while using it');
		}
	};

	const handleDelete = async () => {
		setIsLoadingDelete(true);
		try {
			await deleteTask(id, token, logout);
			onClose();
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoadingDelete(false);
		}
	};

	return (
		<Canvas width="774px">
			<TaskWindow onClose={onClose} title={title} />
			<div className="flex gap-[7px]">
				<MainButton onClick={handleSubmit}>
					{mode === 'create' ? isLoadingSubmit ? <DotsLoader /> : 'Create' : isLoadingSubmit ? <DotsLoader /> : 'Save'}
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
