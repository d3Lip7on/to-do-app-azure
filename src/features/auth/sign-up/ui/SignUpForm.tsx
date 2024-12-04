import { MainButton, Canvas } from '../../../../shared/ui';
import { SignUpWindow } from './SignUpWindow';
import { useContext } from 'react';
import { AuthFormContext } from '../model/context/AuthFormProvider';
import { validateEmail, validateInput, validatePassword } from '../model/utilities/ValidateRegistration';

type SignUpFormProps = {
	onSubmit: () => void;
	onClose: () => void;
};

export function SignUpForm({ onClose, onSubmit }: SignUpFormProps) {
	const { usernameInputState, emailInputState, passwordInputState, confirmPasswordInputState } =
		useContext(AuthFormContext);

	const validate = () => {
		validateInput(usernameInputState, emailInputState, passwordInputState, confirmPasswordInputState);
		validateEmail(emailInputState);
		validatePassword(passwordInputState, confirmPasswordInputState);
	};

	return (
		<Canvas width="570px">
			<SignUpWindow onClose={onClose} />
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
