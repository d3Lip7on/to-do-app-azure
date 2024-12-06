import { MainButton, Canvas } from '../../../../shared/ui';
import { SignUpWindow } from './SignUpWindow';
import { useContext } from 'react';
import { AuthFormContext } from '../../model/context/AuthFormProvider';
import { validateEmail, validateInput, validatePassword } from '../../model/utilities/ValidateRegistration';

type SignUpFormProps = {
	onSubmit: () => void;
	onClose: () => void;
};

export function SignUpForm({ onClose, onSubmit }: SignUpFormProps) {
	const { usernameInputState, emailInputState, passwordInputState, confirmPasswordInputState } =
		useContext(AuthFormContext);

	const validate = () => {
		validateInput(emailInputState, passwordInputState, confirmPasswordInputState);
		validateEmail(emailInputState);
		validatePassword(passwordInputState);
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
