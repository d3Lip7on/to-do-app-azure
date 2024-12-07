import { createContext, useState } from 'react';

interface RegisterFormContextType {
	usernameInputState: string;
	setUsernameInputState: (index: string) => void;
	emailInputState: string;
	setEmailInputState: (index: string) => void;
	passwordInputState: string;
	setPasswordInputState: (index: string) => void;
	confirmPasswordInputState: string;
	setConfirmPasswordInputState: (index: string) => void;
}

export const RegisterFormContext = createContext<RegisterFormContextType>({
	usernameInputState: '',
	setUsernameInputState: () => {},
	emailInputState: '',
	setEmailInputState: () => {},
	passwordInputState: '',
	setPasswordInputState: () => {},
	confirmPasswordInputState: '',
	setConfirmPasswordInputState: () => {},
});

export const RegisterFormProvider = ({ children }: { children: React.ReactNode }) => {
	const [usernameInputState, setUsernameInputState] = useState<string>('');
	const [emailInputState, setEmailInputState] = useState<string>('');
	const [passwordInputState, setPasswordInputState] = useState<string>('');
	const [confirmPasswordInputState, setConfirmPasswordInputState] = useState<string>('');

	return (
		<RegisterFormContext.Provider
			value={{
				usernameInputState,
				setUsernameInputState,
				emailInputState,
				setEmailInputState,
				passwordInputState,
				setPasswordInputState,
				confirmPasswordInputState,
				setConfirmPasswordInputState,
			}}
		>
			{children}
		</RegisterFormContext.Provider>
	);
};
