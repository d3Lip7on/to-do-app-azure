import { useState } from 'react';
import { Canvas, MainButton, FormTitle, TextInput, TextArea, DateInput, TimeInput } from '../../../shared/ui';
import { SelectColor } from '../../SelectColor';
import { colors } from './model/data/colors';

export function CloseButton({ onClick }: { onClick: () => void }) {
	return (
		<div className="absolute right-0 top-[50%] translate-y-[-50%] ">
			<img onClick={onClick} className="transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 active:transition cursor-pointer" src="/icons/close-button.svg" alt="close-button" />
		</div>
	);
}

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
			<Canvas width="1032px">
				<div className="flex justify-center items-center relative">
					<h1 className="text-[64px] font-bold">New task</h1>
					<CloseButton onClick={() => console.log('Closed window')} />
				</div>

				<FormTitle>Title</FormTitle>
				<TextInput
					onChange={(newValue) => {
						setTextInputState(newValue);
					}}
					value={textInputState}
					placeholder="Enter title"
				/>

				<div className="flex flex-col">
					<FormTitle>Description</FormTitle>
					<TextArea
						onChange={(newValue) => {
							setTextAreaState(newValue);
						}}
						value={textAreaState}
					/>
				</div>
				<div className="flex gap-[10px]">
					<div className="flex flex-col w-[100%]	">
						<FormTitle>Date</FormTitle>

						<DateInput
							onChange={(newValue) => {
								setTextDateState(newValue);
							}}
							value={textDateState}
						/>
					</div>
					<div className="flex flex-col w-[100%] ">
						<FormTitle>Time</FormTitle>
						<TimeInput
							onChange={(newValue) => {
								setTextTimeState(newValue);
							}}
							value={textTimeState}
						/>
					</div>
				</div>
				<FormTitle>Color</FormTitle>
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
