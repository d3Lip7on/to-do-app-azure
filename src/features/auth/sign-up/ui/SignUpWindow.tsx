import { useContext } from 'react';
import { AuthFormContext } from '../../model/context/AuthFormProvider';
import { TextInput, PasswordInput, CloseButton, FormTitle } from '../../../../shared/ui/index';

export function SignUpWindow() {
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
				<CloseButton onClick={() => console.log('Closed window')} />
			</div>

			<div className="pl-[15px]">
				<FormTitle>Username</FormTitle>
			</div>
			<TextInput
				onChange={(newValue) => {
					setUsernameInputState(newValue);
				}}
				value={usernameInputState}
				placeholder="Enter your username"
			/>
			<div className="pl-[15px]">
				<FormTitle>E-mail address</FormTitle>
			</div>
			<TextInput
				onChange={(newValue) => {
					setEmailInputState(newValue);
				}}
				value={emailInputState}
				placeholder="Enter e-mail address"
			/>
			<div className="pl-[15px]">
				<FormTitle>Password</FormTitle>
			</div>
			<PasswordInput
				onChange={(newValue) => {
					setPasswordInputState(newValue);
				}}
				value={passwordInputState}
			/>
			<div className="pl-[15px]">
				<FormTitle>Confirm password</FormTitle>
			</div>
			<PasswordInput
				onChange={(newValue) => {
					setConfirmPasswordInputState(newValue);
				}}
				value={confirmPasswordInputState}
			/>
		</div>
	);
}
