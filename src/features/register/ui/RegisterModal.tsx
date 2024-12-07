// TaskModal.tsx
import { Modal } from '../../../shared/ui';
import { RegisterFormProvider } from '../model/context/RegisterFormProvider';
import { RegisterForm } from './RegisterForm';

type AuthModalProps = {
	onClose: () => void;
	onSubmit: () => void;
};

export function RegisterModal({ onClose, onSubmit }: AuthModalProps) {
	return (
		<Modal>
			<RegisterFormProvider>
				<RegisterForm onSubmit={onSubmit} onClose={onClose} />
			</RegisterFormProvider>
		</Modal>
	);
}
