import { MainButton, Canvas, DotsLoader } from '../../../shared/ui';
import { useContext, useState } from 'react';
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
	const { usernameInputState, emailInputState, passwordInputState, confirmPasswordInputState } =
		useContext(RegisterFormContext);
	const { login } = useAuth();
	const [isLoading, setIsLoading] = useState<boolean>(false);

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
						setIsLoading(!isLoading);
						validate();
						await registerUser({ username: usernameInputState, password: passwordInputState, email: emailInputState });
						login(emailInputState, passwordInputState);
						onClose();
					} catch (error) {
						alert(error);
					} finally {
						setIsLoading(isLoading);
					}
				}}
			>
				{isLoading ? <DotsLoader /> : 'Sign Up'}
			</MainButton>
		</Canvas>
	);
}
