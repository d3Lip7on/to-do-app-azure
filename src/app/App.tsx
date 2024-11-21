import { useState } from 'react';
import { TextArea } from '../shared/ui/TextArea';
import { DateInput, TimeInput } from '../shared/ui';

function App() {
	const [value, setValue] = useState('');
	return (
		<div>
			<TimeInput
				value={value}
				onChange={(newValue: string) => {
					setValue(newValue);
				}}
			/>
		</div>
	);
}

export default App;
