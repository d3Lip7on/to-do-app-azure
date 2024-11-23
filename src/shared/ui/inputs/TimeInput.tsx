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
			className="block w-full p-5 bg-[#E3E3E3] placeholder:text-[#858585] placeholder:italic text-black text-[40px]"
		/>
	);
}
