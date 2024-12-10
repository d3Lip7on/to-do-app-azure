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
	const [isError, setIsError] = useState<string>('');

	const { textInputState, textAreaState, textDateState, textTimeState, activeColor, id } = useFormState();

	const { token, logout } = useAuth();

	const title = getTaskTitle(mode);

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			handleSubmit();
		}
	};

	const handleSubmit = async () => {
		if (token) {
			if (textInputState != '') {
				setIsLoadingSubmit(true);
				const due = getDueDate(textDateState, textTimeState);
				const task = buildTask(id, textInputState, textAreaState, activeColor, due);
				if (mode === 'create') {
					try {
						await createTask(task, token, logout);
						onClose();
					} catch (error) {
						setIsError(`${error}`);
					} finally {
						setIsLoadingSubmit(false);
					}
				}
				if (mode == 'edit') {
					try {
						await editTask(task, token, logout);
						onClose();
					} catch (error) {
						setIsError(`${error}`);
					} finally {
						setIsLoadingSubmit(false);
					}
				}
			} else {
				setIsError('Error: Title field is empty');
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
			setIsError(`${error}`);
		} finally {
			setIsLoadingDelete(false);
		}
	};

	return (
		<Canvas width="774px">
			<TaskWindow onClose={onClose} title={title} />
			<div className="flex justify-center text-red-700 text-[27px] font-bold pb-[20px]">{isError.slice(7)}</div>
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
