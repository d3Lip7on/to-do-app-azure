import { MainButton, Canvas } from '../../../shared/ui';
import { useContext } from 'react';
import { validateEmail, validateInput, validatePassword } from '../../../shared/utilities/ValidateRegistration';
import { RegisterFormContext } from '../model/context/RegisterFormProvider';
import { RegisterWindow } from './RegisterWindow';

type SignUpFormProps = {
	onSubmit: () => void;
	onClose: () => void;
};

export function RegisterForm({ onClose, onSubmit }: SignUpFormProps) {
	const { usernameInputState, emailInputState, passwordInputState, confirmPasswordInputState } = useContext(RegisterFormContext);

	const validate = () => {
		validateInput(emailInputState, passwordInputState, confirmPasswordInputState);
		validateEmail(emailInputState);
		validatePassword(passwordInputState);
	};

	return (
		<Canvas width="570px">
			<RegisterWindow onClose={onClose} />
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
				Sign Up
			</MainButton>
		</Canvas>
	);
}
