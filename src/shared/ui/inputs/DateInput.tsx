type DateInputProps = {
	value: string;
	onChange: (newValue: string) => void;
};

export function DateInput({ value, onChange }: DateInputProps) {
	return (
		<input
			value={value}
			onChange={(event) => {
				onChange(event.currentTarget.value);
			}}
			type="date"
			className="block w-full p-5 bg-form-input-background placeholder:text-form-input-placeholder text-form-input-text placeholder:italic text-[40px]"
		/>
	);
}
