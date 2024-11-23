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
			className="block w-full p-[15px] bg-form-input-background placeholder:text-form-input-placeholder text-form-input-text placeholder:italic text-[30px]"
		/>
	);
}
