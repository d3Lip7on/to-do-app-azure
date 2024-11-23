import { useState } from 'react';

type PasswordInputProps = {
	value: string;
	onChange: (newValue: string) => void;
};

export function PasswordInput({ onChange, value }: PasswordInputProps) {
	const [isPasswordVisible, setPasswordVisibility] = useState(false);

	return (
		<div className="relative">
			<input
				type={isPasswordVisible ? 'text' : 'password'}
				placeholder="Enter your password"
				className="block w-full p-5 bg-form-input-background placeholder:text-form-input-placeholder text-form-input-text  placeholder:italic text-[40px]"
				value={value}
				onChange={(event) => {
					onChange(event.currentTarget.value);
				}}
			/>
			<button
				className="absolute right-[20px] top-[50%] translate-y-[-50%]"
				onClick={() => {
					setPasswordVisibility(!isPasswordVisible);
				}}
			>
				<img src="/icons/eye.svg" />
			</button>
		</div>
	);
}
