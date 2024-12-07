import { useContext } from 'react';
import { LoginFormContext } from '../model/context/LoginFormProvider';
import { Canvas, MainButton } from '../../../shared/ui';
import { validateInput, validateEmail, validatePassword } from '../../../shared/utilities/ValidateRegistration';
import { LoginWindow } from './LoginWindow';

type LogInFormProps = {
	onSubmit: () => void;
	onClose: () => void;
};

export function LoginForm({ onClose, onSubmit }: LogInFormProps) {
	const { emailInputState, passwordInputState } = useContext(LoginFormContext);

	const validate = () => {
		validateInput(emailInputState, passwordInputState);
		validateEmail(emailInputState);
		validatePassword(passwordInputState);
	};

	return (
		<Canvas width="570px">
			<LoginWindow onClose={onClose} />
			<MainButton
				onClick={() => {
					try {
						validate();
					} catch (error) {
						alert(error);
					}

					onSubmit();
				}}
			>
				Log In
			</MainButton>
		</Canvas>
	);
}
