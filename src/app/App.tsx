import { Canvas, MainButton } from '../shared/ui';
import { SelectColor } from '../features/SelectColor';

function App() {
	return (
		<div>
			<Canvas width="1000px">
				<SelectColor />
				<MainButton>Create</MainButton>
			</Canvas>
		</div>
	);
}

export default App;
