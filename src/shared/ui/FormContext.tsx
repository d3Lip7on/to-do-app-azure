import { createContext, useState } from 'react';
import { colors } from '../../features/create-task/ui/model/data/colors';

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

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const [textInputState, setTextInputState] = useState<string>('');
	const [textAreaState, setTextAreaState] = useState<string>('');
	const [textDateState, setTextDateState] = useState<string>('');
	const [textTimeState, setTextTimeState] = useState<string>('');
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