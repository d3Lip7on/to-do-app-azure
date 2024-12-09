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
				className="block w-full p-[15px] bg-form-input-background placeholder:text-form-input-placeholder text-form-input-text  placeholder:italic text-[30px]"
				value={value}
				onChange={(event) => {
					onChange(event.currentTarget.value);
				}}
			/>
			<button
				className="absolute right-[15px] top-[50%] translate-y-[-50%]"
				onClick={() => {
					setPasswordVisibility(!isPasswordVisible);
				}}
			>
				{isPasswordVisible ? (
					<img
						className="transition-transform duration-100 transform active:scale-75 hover:scale-105"
						src="/icons/eye.svg"
					/>
				) : (
					<img
						className="transition-transform duration-100 transform active:scale-75 hover:scale-105"
						src="/icons/eye-closed.svg"
					/>
				)}
			</button>
		</div>
	);
}
