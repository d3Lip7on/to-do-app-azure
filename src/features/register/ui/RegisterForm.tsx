import { MainButton, Canvas } from '../../../shared/ui';
import { useContext } from 'react';
import { validateEmail, validateInput, validatePassword } from '../../../shared/utilities/ValidateRegistration';
import { RegisterFormContext } from '../model/context/RegisterFormProvider';
import { RegisterWindow } from './RegisterWindow';
import { registerUser } from '../api/registerUser';
import { useAuth } from '../../../app/providers/AuthProvider/AuthProvider';

type SignUpFormProps = {
	onSubmit: () => void;
	onClose: () => void;
};

export function RegisterForm({ onClose, onSubmit }: SignUpFormProps) {
	const { usernameInputState, emailInputState, passwordInputState, confirmPasswordInputState } = useContext(RegisterFormContext);
	const { login } = useAuth();

	const validate = () => {
		validateInput(emailInputState, passwordInputState, confirmPasswordInputState);
		validateEmail(emailInputState);
		validatePassword(passwordInputState, confirmPasswordInputState);
	};

	return (
		<Canvas width="570px">
			<RegisterWindow onClose={onClose} />
			<MainButton
				onClick={async () => {
					try {
						validate();
						await registerUser({ username: usernameInputState, password: passwordInputState, email: emailInputState });
						login(emailInputState, passwordInputState);
						onClose();
					} catch (error) {
						alert(error);
					}
				}}
			>
				Sign Up
			</MainButton>
		</Canvas>
	);
}
