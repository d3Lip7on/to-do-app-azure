import { useContext } from 'react';
import { AuthFormContext } from '../../model/context/AuthFormProvider';
import { TextInput, PasswordInput, CloseButton, FormTitle } from '../../../../shared/ui/index';

export function SignUpWindow({ onClose }: { onClose: () => void }) {
	const {
		usernameInputState,
		setUsernameInputState,
		emailInputState,
		setEmailInputState,
		passwordInputState,
		setPasswordInputState,
		confirmPasswordInputState,
		setConfirmPasswordInputState,
	} = useContext(AuthFormContext);

	return (
		<div>
			<div className="flex justify-center items-center relative">
				<h1 className="text-[48px] font-bold">Sign Up</h1>
				<CloseButton onClick={onClose} />
			</div>

			<div className="pl-[15px]">
				<FormTitle>Username</FormTitle>
			</div>
			<div className="mb-[7px]">
				<TextInput
					onChange={(newValue) => {
						setUsernameInputState(newValue);
					}}
					value={usernameInputState}
					placeholder="Enter your username"
				/>
			</div>

			<div className="pl-[15px]">
				<FormTitle>E-mail address</FormTitle>
			</div>
			<div className="mb-[7px]">
				<TextInput
					onChange={(newValue) => {
						setEmailInputState(newValue);
					}}
					value={emailInputState}
					placeholder="Enter e-mail address"
				/>
			</div>

			<div className="pl-[15px]">
				<FormTitle>Password</FormTitle>
			</div>
			<div className="mb-[7px]">
				<PasswordInput
					onChange={(newValue) => {
						setPasswordInputState(newValue);
					}}
					value={passwordInputState}
				/>
			</div>

			<div className="pl-[15px]">
				<FormTitle>Confirm password</FormTitle>
			</div>
			<div className="mb-[52px]">
				<PasswordInput
					onChange={(newValue) => {
						setConfirmPasswordInputState(newValue);
					}}
					value={confirmPasswordInputState}
				/>
			</div>
		</div>
	);
}
