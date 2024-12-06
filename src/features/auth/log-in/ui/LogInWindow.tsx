import { useContext } from 'react';
import { AuthFormContext } from '../../model/context/AuthFormProvider';
import { TextInput, PasswordInput, CloseButton, FormTitle } from '../../../../shared/ui/index';
import { error } from 'console';

export function LogInWindow({ onClose }: { onClose: () => void }) {
	const { emailInputState, setEmailInputState, passwordInputState, setPasswordInputState } =
		useContext(AuthFormContext);
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
