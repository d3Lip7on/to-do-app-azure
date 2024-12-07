import { LoginModal } from '../features/login';

function App() {
	return (
		<LoginModal
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
