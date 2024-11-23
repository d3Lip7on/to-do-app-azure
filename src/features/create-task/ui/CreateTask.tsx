import { useState } from 'react';
import { Canvas, MainButton, FormTitle, TextInput, TextArea, DateInput, TimeInput } from '../../../shared/ui';
import { SelectColor, CloseButton } from '../../index';
import { colors } from './model/data/colors';

export function CreateTask() {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const [textInputState, setTextInputState] = useState<string>('');
	const [textAreaState, setTextAreaState] = useState<string>('');
	const [textDateState, setTextDateState] = useState<string>('');
	const [textTimeState, setTextTimeState] = useState<string>('');
	function clickHandler(index: number) {
		setActiveIndex(index);
	}
	return (
		<div>
			<Canvas width="774px">
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
				<SelectColor onClick={clickHandler} activeIndex={activeIndex} />
				<MainButton
					color="FBF868"
					onClick={() => {
						console.log(`Задача : ${textInputState} , описание задачи: ${textAreaState} , дата : ${textDateState} , время : ${textTimeState} , цвет задачи : ${activeIndex != null ? colors[activeIndex] : 'null'}  `);
					}}
				>
					Create
				</MainButton>
			</Canvas>
		</div>
	);
}
