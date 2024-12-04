import { MainButton, Canvas } from '../../../../shared/ui';
import { SignUpWindow } from './SignUpWindow';
import { useContext } from 'react';
import { AuthFormContext } from '../../model/context/AuthFormProvider';

type SignUpFormProps = {
	onSubmit: () => void;
	onClose: () => void;
};

export function SignUpForm({ onSubmit, onClose }: SignUpFormProps) {
	const { emailInputState, passwordInputState, confirmPasswordInputState } = useContext(AuthFormContext);
	function checkingEmail(email: string) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}
	function validatePassword(X: string, Y: string) {
		if (X == Y) {
			console.log('password validation success');
			return X;
		} else {
			alert('wrong password');
		}
	}
	function validateEmail(email: string) {
		if (checkingEmail(email)) {
			console.log('email validation success');
			return email;
		} else {
			alert('wrong email');
		}
	}
	const handleSignUp = () => {
		validateEmail(emailInputState);
		validatePassword(passwordInputState, confirmPasswordInputState);
	};

	return (
		<Canvas width="570px">
			<SignUpWindow onClose={onClose} />
			<MainButton onClick={handleSignUp}>Sign Up</MainButton>
		</Canvas>
	);
}
