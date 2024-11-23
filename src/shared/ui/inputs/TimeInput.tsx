type TimeInputProps = {
	value: string;
	onChange: (newValue: string) => void;
};

export function TimeInput({ value, onChange }: TimeInputProps) {
	return (
		<input
			value={value}
			onChange={(event) => {
				onChange(event.currentTarget.value);
			}}
			type="time"
			className="block w-full p-[15px] bg-form-input-background placeholder:text-form-input-placeholder text-form-input-text placeholder:italic text-[30px]"
		/>
	);
}
