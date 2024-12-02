import { createContext, useState } from 'react';
import { colors } from '../../features/create-task/ui/model/data/colors';

interface Data {
	indexValue: number | null;
	inputValue: string;
	areaValue: string;
	dateValue: string;
	timeValue: string;
}

interface FormContextType {
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

export const FormContext = createContext<FormContextType>({
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

export const FormProvider = ({ children, data }: { children: React.ReactNode; data?: Data }) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(data ? data.indexValue : null);
	const [textInputState, setTextInputState] = useState<string>(data ? data.inputValue : '');
	const [textAreaState, setTextAreaState] = useState<string>(data ? data.areaValue : '');
	const [textDateState, setTextDateState] = useState<string>(data ? data.dateValue : '');
	const [textTimeState, setTextTimeState] = useState<string>(data ? data.timeValue : '');
	const activeColor: string = activeIndex != null ? colors[activeIndex] : 'null';

	return (
		<FormContext.Provider
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
		</FormContext.Provider>
	);
};
