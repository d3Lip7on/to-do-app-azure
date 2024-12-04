import { createContext, useState } from 'react';

interface AuthFormContextType {
	usernameInputState: string;
	setUsernameInputState: (index: string) => void;
	emailInputState: string;
	setEmailInputState: (index: string) => void;
	passwordInputState: string;
	setPasswordInputState: (index: string) => void;
	confirmPasswordInputState: string;
	setConfirmPasswordInputState: (index: string) => void;
}

export const AuthFormContext = createContext<AuthFormContextType>({
	usernameInputState: '',
	setUsernameInputState: () => {},
	emailInputState: '',
	setEmailInputState: () => {},
	passwordInputState: '',
	setPasswordInputState: () => {},
	confirmPasswordInputState: '',
	setConfirmPasswordInputState: () => {},
});

export const AuthFormProvider = ({ children }: { children: React.ReactNode }) => {
	const [usernameInputState, setUsernameInputState] = useState<string>('');
	const [emailInputState, setEmailInputState] = useState<string>('');
	const [passwordInputState, setPasswordInputState] = useState<string>('');
	const [confirmPasswordInputState, setConfirmPasswordInputState] = useState<string>('');

	return (
		<AuthFormContext.Provider
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
		</AuthFormContext.Provider>
	);
};
