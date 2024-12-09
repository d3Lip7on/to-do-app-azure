import { useContext, useState } from 'react';
import { LoginFormContext } from '../model/context/LoginFormProvider';
import { Canvas, MainButton } from '../../../shared/ui';
import { validateInput, validateEmail, validatePassword } from '../../../shared/utilities/ValidateRegistration';
import { LoginWindow } from './LoginWindow';
import { useAuth } from '../../../app/providers/AuthProvider/AuthProvider';
import { TailSpin, ThreeDots } from 'react-loader-spinner';

type LogInFormProps = {
	onSubmit: () => void;
	onClose: () => void;
};

export function LoginForm({ onClose, onSubmit }: LogInFormProps) {
	const { emailInputState, passwordInputState } = useContext(LoginFormContext);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { login } = useAuth();

	const validate = () => {
		validateInput(emailInputState, passwordInputState);
		validateEmail(emailInputState);
	};

	return (
		<Canvas width="570px">
			<LoginWindow onClose={onClose} />
			<MainButton
				onClick={async () => {
					try {
						setIsLoading(true);
						validate();
						await login(emailInputState, passwordInputState);
					} catch (error) {
						alert(error);
					} finally {
						setIsLoading(false);
					}
					onClose();
				}}
			>
				{isLoading ? (
					<ThreeDots
						visible={true}
						height="80"
						width="80"
						color="#000000"
						radius="9"
						ariaLabel="three-dots-loading"
						wrapperStyle={{}}
						wrapperClass=""
					/>
				) : (
					'Log in'
				)}
			</MainButton>
		</Canvas>
	);
}
