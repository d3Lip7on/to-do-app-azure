import { EditTask } from '../features/edit-task/ui/EditTask';
import { FormProvider } from '../shared/ui/FormContext';
const data = {
	indexValue: 2,
	inputValue: 'piska',
	areaValue: 'ueban',
	dateValue: 'dddd',
	timeValue: '443',
};
function App() {
	return (
		<FormProvider data={data}>
			<EditTask />
		</FormProvider>
	);
}

export default App;
