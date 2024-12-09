import { createContext, useState } from 'react';
import { colors } from '../data/colors';
import { TaskType } from '../../../../entities/task';
import { normalizeDateNumber } from '../../../../shared/lib/dateParser';

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
	id: number;
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
	id: -1,
});

function getActiveIndex(color: string): number {
	return colors.findIndex((value) => {
		return value === color;
	});
}
export const TaskFormProvider = ({ children, initialData }: { children: React.ReactNode; initialData?: TaskType }) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(initialData ? getActiveIndex(initialData.color) : 0);
	const [textInputState, setTextInputState] = useState<string>(initialData ? initialData.title : '');
	const [textAreaState, setTextAreaState] = useState<string>(initialData ? (initialData.description ? initialData.description : '') : '');
	const [textDateState, setTextDateState] = useState<string>(
		initialData
			? initialData.due
				? `${initialData.due.getFullYear()}-${normalizeDateNumber(initialData.due.getMonth() + 1)}-${initialData.due.getDate()}`
				: ''
			: ''
	);
	const [textTimeState, setTextTimeState] = useState<string>(
		initialData ? (initialData.due ? (initialData.hasTime ? `${initialData.due.getHours()}:${initialData.due.getMinutes()}` : '') : '') : ''
	);
	const activeColor: string = activeIndex != null ? colors[activeIndex] : 'null';
	const id: number = initialData ? initialData.id : -1;

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
				id,
			}}
		>
			{children}
		</TaskFormContext.Provider>
	);
};
