// TaskModal.tsx
import { Modal } from '../../../shared/ui';
import { RegisterFormProvider } from '../model/context/RegisterFormProvider';
import { RegisterForm } from './RegisterForm';

type AuthModalProps = {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: () => void;
};

export function RegisterModal({ isOpen, onClose, onSubmit }: AuthModalProps) {
	if (!isOpen) return null;

	return (
		<Modal>
			<RegisterFormProvider>
				<RegisterForm onSubmit={onSubmit} onClose={onClose} />
			</RegisterFormProvider>
		</Modal>
	);
}
