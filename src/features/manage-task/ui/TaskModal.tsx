// TaskModal.tsx
import { Modal } from '../../../shared/ui';
import { TaskData, TaskFormProvider } from '../model/context/TaskFormProvider';
import { TaskForm } from './TaskForm';

type TaskModalProps = {
	mode: 'create' | 'edit';
	isOpen: boolean;
	onClose: () => void;
	initialData?: TaskData;
	onSubmit: () => void;
	onDelete: () => void;
};

export function TaskModal({ mode, isOpen, onClose, initialData, onSubmit, onDelete }: TaskModalProps) {
	if (!isOpen) return null;

	return (
		<Modal>
			<TaskFormProvider initialData={initialData}>
				<TaskForm mode={mode} onSubmit={onSubmit} onDelete={onDelete} onClose={onClose} />
			</TaskFormProvider>
		</Modal>
	);
}
