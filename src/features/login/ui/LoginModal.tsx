import { Modal } from '../../../shared/ui';
import { LoginFormProvider } from '../model/context/LoginFormProvider';
import { LoginForm } from './LoginForm';

type AuthModalProps = {
	onClose: () => void;
	onSubmit: () => void;
};

export function LoginModal({ onClose, onSubmit }: AuthModalProps) {
	return (
		<Modal onClose={onClose}>
			<LoginFormProvider>
				<LoginForm onSubmit={onSubmit} onClose={onClose} />
			</LoginFormProvider>
		</Modal>
	);
}
