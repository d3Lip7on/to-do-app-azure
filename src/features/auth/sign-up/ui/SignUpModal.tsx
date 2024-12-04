// TaskModal.tsx
import { Modal } from '../../../../shared/ui';
import { AuthFormProvider } from '../../model/context/AuthFormProvider';
import { SignUpForm } from './SignUpForm';

type AuthModalProps = {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: () => void;
};

export function SignUpModal({ isOpen, onClose, onSubmit }: AuthModalProps) {
	if (!isOpen) return null;

	return (
		<Modal>
			<AuthFormProvider>
				<SignUpForm onSubmit={onSubmit} onClose={onClose} />
			</AuthFormProvider>
		</Modal>
	);
}
