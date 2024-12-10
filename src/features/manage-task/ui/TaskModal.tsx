import { TaskType } from '../../../entities/task';
import { Modal } from '../../../shared/ui';
import { TaskFormProvider } from '../model/context/TaskFormProvider';
import { TaskForm } from './TaskForm';

type TaskModalProps = {
	mode: 'create' | 'edit';
	isOpen: boolean;
	onClose: () => void;
	initialData?: TaskType;
};

export function TaskModal({ mode, isOpen, onClose, initialData }: TaskModalProps) {
	if (!isOpen) return null;

	if (mode === 'edit') {
		if (initialData == null) {
			throw new Error('no initial data to edit');
		}
	}

	return (
		<Modal onClose={onClose}>
			<TaskFormProvider initialData={initialData}>
				<TaskForm mode={mode} onClose={onClose} />
			</TaskFormProvider>
		</Modal>
	);
}
