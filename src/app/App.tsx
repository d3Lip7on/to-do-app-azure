import { LogInModal } from '../features/login';

function App() {
	return (
		<LogInModal
			isOpen={true}
			onClose={() => {
				console.log('closed');
			}}
			onSubmit={() => {
				console.log();
			}}
		/>
	);
}

export default App;
