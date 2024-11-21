type PasswordInputProps = {
	value: string;
	onChange: (newValue: string) => void;
};

export function PasswordInput({ onChange, value }: PasswordInputProps) {
	return (
		<input
			type="password"
			placeholder="Enter your password"
			className="block w-full p-5 bg-[#E3E3E3] placeholder:text-[#858585] placeholder:italic text-black text-[40px]"
			value={value}
			onChange={(event) => {
				onChange(event.currentTarget.value);
			}}
		/>
	);
}
