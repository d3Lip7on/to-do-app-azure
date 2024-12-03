import { CreateTask } from '../features/create-task/ui/CreateTask';
import { EditTask } from '../features/edit-task/ui/EditTask';
import { Header } from '../page/layout/Header';
import { FormProvider } from '../shared/ui/FormContext';
const data = {
	indexValue: 2,
	inputValue: 'piska',
	areaValue: 'ueban',
	dateValue: 'dddd',
	timeValue: '443',
};
function App() {
	return <Header />;
}

export default App;
