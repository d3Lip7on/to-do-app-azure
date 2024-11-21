type TextAreaProps = {
	value: string;
	onChange: (newValue: string) => void;
};

export function TextArea({ onChange, value }: TextAreaProps) {
	return (
		<textarea
			placeholder="Enter description"
			className="block w-full h-[180px] p-5 bg-[#E3E3E3] placeholder:text-[#858585] placeholder:italic text-black text-[40px] resize-none"
			value={value}
			onChange={(event) => {
				onChange(event.currentTarget.value);
			}}
		/>
	);
}
