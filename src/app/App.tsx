import { VoiceInputButton } from '../features/voice-input';
import { Page } from '../page/Page';
import { AuthProvider } from './providers/AuthProvider';

function App() {
	return (
		<AuthProvider>
			<Page />
		</AuthProvider>
	);
}

export default App;
