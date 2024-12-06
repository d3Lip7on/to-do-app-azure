import { MainButton, Canvas } from '../../../../shared/ui';
import { LogInWindow } from './LogInWindow';
import { useContext } from 'react';
import { AuthFormContext } from '../../model/context/AuthFormProvider';
import { validateEmail, validateInput, validatePassword } from '../../model/utilities/ValidateRegistration';

type LogInFormProps = {
	onSubmit: () => void;
	onClose: () => void;
};

export function LogInForm({ onClose, onSubmit }: LogInFormProps) {
	const { emailInputState, passwordInputState } = useContext(AuthFormContext);

	const validate = () => {
		validateInput(emailInputState, passwordInputState);
		validateEmail(emailInputState);
		validatePassword(passwordInputState);
	};

	return (
		<Canvas width="570px">
			<LogInWindow onClose={onClose} />
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
