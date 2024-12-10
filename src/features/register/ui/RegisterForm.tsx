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
	const { usernameInputState, emailInputState, passwordInputState, confirmPasswordInputState } = useContext(RegisterFormContext);
	const { login } = useAuth();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<string>('');

	const validate = () => {
		validateInput(emailInputState, passwordInputState, confirmPasswordInputState);
		validateEmail(emailInputState);
		validatePassword(passwordInputState, confirmPasswordInputState);
	};

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			handleSubmit();
		}
	};

	async function handleSubmit() {
		try {
			setIsLoading(!isLoading);
			validate();
			await registerUser({ username: usernameInputState, password: passwordInputState, email: emailInputState });
			login(emailInputState, passwordInputState);
			onClose();
		} catch (error) {
			setIsError(`${error}`);
		} finally {
			setIsLoading(isLoading);
		}
	}

	return (
		<Canvas width="570px">
			<div onKeyDown={handleKeyDown}>
				<RegisterWindow onClose={onClose} />
				<div className="flex justify-center text-red-700 text-[27px] font-bold pb-[20px]">{isError.slice(7)}</div>
				<MainButton onClick={handleSubmit}>{isLoading ? <DotsLoader /> : 'Sign Up'}</MainButton>
			</div>
		</Canvas>
	);
}
