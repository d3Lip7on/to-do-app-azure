import { CreateTask } from '../features/create-task/ui/CreateTask';
import { EditTask } from '../features/edit-task/ui/EditTask';
import { Footer } from '../page/layout/Footed';
import { Header } from '../page/layout/Header';
import { Page } from '../page/Page';
import { FormProvider } from '../shared/ui/FormContext';
const data = {
	indexValue: 2,
	inputValue: 'piska',
	areaValue: 'ueban',
	dateValue: 'dddd',
	timeValue: '443',
};
function App() {
	return <EditTask />;
}

export default App;
