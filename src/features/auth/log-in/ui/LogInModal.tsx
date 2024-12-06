// TaskModal.tsx
import { Modal } from '../../../../shared/ui';
import { AuthFormProvider } from '../../model/context/AuthFormProvider';
import { LogInForm } from './LogInForm';

type AuthModalProps = {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: () => void;
};

export function LogInModal({ isOpen, onClose, onSubmit }: AuthModalProps) {
	if (!isOpen) return null;

	return (
		<Modal>
			<AuthFormProvider>
				<LogInForm onSubmit={onSubmit} onClose={onClose} />
			</AuthFormProvider>
		</Modal>
	);
}
