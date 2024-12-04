import { createContext, useState } from 'react';
import { colors } from '../data/colors';

export interface TaskData {
	indexValue: number | null;
	inputValue: string;
	areaValue: string;
	dateValue: string;
	timeValue: string;
}

interface TaskFormContextType {
	activeIndex: number | null;
	setActiveIndex: (index: number | null) => void;
	textInputState: string;
	setTextInputState: (index: string) => void;
	textAreaState: string;
	setTextAreaState: (index: string) => void;
	textDateState: string;
	setTextDateState: (index: string) => void;
	textTimeState: string;
	setTextTimeState: (index: string) => void;
	activeColor: string;
}

export const TaskFormContext = createContext<TaskFormContextType>({
	activeIndex: null,
	setActiveIndex: () => {},
	textInputState: '',
	setTextInputState: () => {},
	textAreaState: '',
	setTextAreaState: () => {},
	textDateState: '',
	setTextDateState: () => {},
	textTimeState: '',
	setTextTimeState: () => {},
	activeColor: 'null',
});

export const TaskFormProvider = ({ children, initialData }: { children: React.ReactNode; initialData?: TaskData }) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(initialData ? initialData.indexValue : null);
	const [textInputState, setTextInputState] = useState<string>(initialData ? initialData.inputValue : '');
	const [textAreaState, setTextAreaState] = useState<string>(initialData ? initialData.areaValue : '');
	const [textDateState, setTextDateState] = useState<string>(initialData ? initialData.dateValue : '');
	const [textTimeState, setTextTimeState] = useState<string>(initialData ? initialData.timeValue : '');
	const activeColor: string = activeIndex != null ? colors[activeIndex] : 'null';

	return (
		<TaskFormContext.Provider
			value={{
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
				activeColor,
			}}
		>
			{children}
		</TaskFormContext.Provider>
	);
};
