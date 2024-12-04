import { SignUpModal } from '../features/auth/sign-up';

function App() {
	return (
		<SignUpModal
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
