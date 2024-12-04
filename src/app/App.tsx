import { TaskModal } from '../features/manage-task';

function App() {
	return <TaskModal mode={'edit'} isOpen={true} onClose={() => {}} onDelete={() => {}} onSubmit={() => {}} />;
}

export default App;
