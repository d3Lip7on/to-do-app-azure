import { createContext, useState } from 'react';

interface LoginFormContextType {
	emailInputState: string;
	setEmailInputState: (index: string) => void;
	passwordInputState: string;
	setPasswordInputState: (index: string) => void;
}

export const LoginFormContext = createContext<LoginFormContextType>({
	emailInputState: '',
	setEmailInputState: () => {},
	passwordInputState: '',
	setPasswordInputState: () => {},
});

export const LoginFormProvider = ({ children }: { children: React.ReactNode }) => {
	const [emailInputState, setEmailInputState] = useState<string>('');
	const [passwordInputState, setPasswordInputState] = useState<string>('');

	return (
		<LoginFormContext.Provider
			value={{
				emailInputState,
				setEmailInputState,
				passwordInputState,
				setPasswordInputState,
			}}
		>
			{children}
		</LoginFormContext.Provider>
	);
};
