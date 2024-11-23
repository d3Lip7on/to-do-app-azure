type TextAreaProps = {
	value: string;
	onChange: (newValue: string) => void;
};

export function TextArea({ onChange, value }: TextAreaProps) {
	return (
		<textarea
			placeholder="Enter description"
			className="block w-full h-[180px] p-5 bg-form-input-background placeholder:text-form-input-placeholder text-form-input-text  placeholder:italic text-[40px] resize-none"
			value={value}
			onChange={(event) => {
				onChange(event.currentTarget.value);
			}}
		/>
	);
}
