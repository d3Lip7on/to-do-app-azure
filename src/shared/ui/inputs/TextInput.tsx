type TextInputProps = {
	value: string;
	onChange: (newValue: string) => void;
	placeholder?: string;
};

export function TextInput({ onChange, value, placeholder }: TextInputProps) {
	return (
		<input
			placeholder={placeholder}
			className="block w-full p-[15px] bg-form-input-background placeholder:text-form-input-placeholder text-form-input-text placeholder:italic text-[30px]"
			value={value}
			onChange={(event) => {
				onChange(event.currentTarget.value);
			}}
		/>
	);
}
