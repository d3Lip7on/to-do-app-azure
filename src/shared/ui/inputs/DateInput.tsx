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
			className="block w-full p-5 bg-[#E3E3E3] placeholder:text-[#858585] placeholder:italic text-black text-[40px]"
		/>
	);
}
