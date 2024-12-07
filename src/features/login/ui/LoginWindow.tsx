import { useContext } from 'react';
import { CloseButton, FormTitle, TextInput, PasswordInput } from '../../../shared/ui';
import { LoginFormContext } from '../model/context/LoginFormProvider';

export function LoginWindow({ onClose }: { onClose: () => void }) {
	const { emailInputState, setEmailInputState, passwordInputState, setPasswordInputState } = useContext(LoginFormContext);
	const isError = true;
	return (
		<div>
			<div className="flex justify-center items-center relative">
				<h1 className="text-[48px] font-bold">Log In</h1>
				<CloseButton onClick={onClose} />
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
			<div className="mb-[52px]">
				<PasswordInput
					onChange={(newValue) => {
						setPasswordInputState(newValue);
					}}
					value={passwordInputState}
				/>
			</div>
		</div>
	);
}
