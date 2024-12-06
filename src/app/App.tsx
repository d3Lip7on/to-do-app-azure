import { LogInModal } from '../features/auth/log-in';

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
