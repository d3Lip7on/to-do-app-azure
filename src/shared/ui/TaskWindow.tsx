import { useContext } from 'react';
import { FormTitle, TextInput, TextArea, DateInput, TimeInput } from './index';
import { SelectColor, CloseButton } from '../../features/index';
import { FormContext } from './FormContext';

export function TaskWindow() {
	const {
		activeIndex,
		setActiveIndex,
		textInputState,
		setTextInputState,
		textAreaState,
		setTextAreaState,
		textDateState,
		setTextDateState,
		textTimeState,
		setTextTimeState,
	} = useContext(FormContext);

	return (
		<div>
			<div className="flex justify-center items-center relative">
				<h1 className="text-[48px] font-bold">New task</h1>
				<CloseButton onClick={() => console.log('Closed window')} />
			</div>

			<div className="pl-[15px]">
				<FormTitle>Title</FormTitle>
			</div>
			<TextInput
				onChange={(newValue) => {
					setTextInputState(newValue);
				}}
				value={textInputState}
				placeholder="Enter title"
			/>

			<div className="flex flex-col">
				<div className="pl-[15px]">
					<FormTitle>Description</FormTitle>
				</div>
				<TextArea
					onChange={(newValue) => {
						setTextAreaState(newValue);
					}}
					value={textAreaState}
				/>
			</div>
			<div className="flex gap-[7px]">
				<div className="flex flex-col w-[100%]	">
					<div className="pl-[15px]">
						<FormTitle>Date</FormTitle>
					</div>

					<DateInput
						onChange={(newValue) => {
							setTextDateState(newValue);
						}}
						value={textDateState}
					/>
				</div>
				<div className="flex flex-col w-[100%] ">
					<div className="pl-[15px]">
						<FormTitle>Time</FormTitle>
					</div>
					<TimeInput
						onChange={(newValue) => {
							setTextTimeState(newValue);
						}}
						value={textTimeState}
					/>
				</div>
			</div>
			<div className="pl-[15px]">
				<FormTitle>Color</FormTitle>
			</div>
			<SelectColor
				onClick={(index: number) => {
					setActiveIndex(index);
				}}
				activeIndex={activeIndex}
			/>
		</div>
	);
}
