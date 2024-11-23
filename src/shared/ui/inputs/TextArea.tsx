type TextAreaProps = {
	value: string;
	onChange: (newValue: string) => void;
};

export function TextArea({ onChange, value }: TextAreaProps) {
	return (
		<textarea
			placeholder="Enter description"
			className="block w-full h-[135px] p-[15px] bg-form-input-background placeholder:text-form-input-placeholder text-form-input-text  placeholder:italic text-[30px] resize-none"
			value={value}
			onChange={(event) => {
				onChange(event.currentTarget.value);
			}}
		/>
	);
}
