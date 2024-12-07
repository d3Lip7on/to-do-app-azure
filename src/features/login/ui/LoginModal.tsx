import { Modal } from '../../../shared/ui';
import { LoginFormProvider } from '../model/context/LoginFormProvider';
import { LoginForm } from './LoginForm';

type AuthModalProps = {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: () => void;
};

export function LoginModal({ isOpen, onClose, onSubmit }: AuthModalProps) {
	if (!isOpen) return null;

	return (
		<Modal>
			<LoginFormProvider>
				<LoginForm onSubmit={onSubmit} onClose={onClose} />
			</LoginFormProvider>
		</Modal>
	);
}
