type TextInputProps = {
	value: string;
	onChange: (newValue: string) => void;
	placeholder?: string;
};

export function TextInput({ onChange, value, placeholder }: TextInputProps) {
	return (
		<input
			placeholder={placeholder}
			className="block w-full p-5 bg-[#E3E3E3] placeholder:text-[#858585] placeholder:italic text-black text-[40px]"
			value={value}
			onChange={(event) => {
				onChange(event.currentTarget.value);
			}}
		/>
	);
}
