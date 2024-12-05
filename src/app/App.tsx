import { TaskType } from '../entities/task';
import { TaskList } from '../entities/task/ui/TaskList';

const tasks: Array<TaskType> = [
	{
		title: 'Deserunt ut ipsum minim officia et et anim dolore velit.',
		description:
			'Labore cupidatat mollit commodo aute qui aliquip fugiat id Lorem nisi ad ipsum tempor. Sit laborum amet et excepteur sint pariatur cupidatat exercitation mollit. Consectetur ex minim exercitation nulla. Sint minim consectetur ea eiusmod consequat eiusmod dolor nulla sit ea quis cillum anim. Irure minim incididunt anim Lorem. Officia magna elit commodo consequat magna anim.',
		color: '#FBF868',
		hasTime: true,
		id: '123',
		isDone: false,
		due: new Date('2024-12-12T13:30'),
	},
	{
		title: 'Deserunt ut ipsum minim officia et et anim dolore velit.',
		description:
			'Labore cupidatat mollit commodo aute qui aliquip fugiat id Lorem nisi ad ipsum tempor. Sit laborum amet et excepteur sint pariatur cupidatat exercitation mollit. Consectetur ex minim exercitation nulla. Sint minim consectetur ea eiusmod consequat eiusmod dolor nulla sit ea quis cillum anim. Irure minim incididunt anim Lorem. Officia magna elit commodo consequat magna anim.',
		color: '#FBF868',
		hasTime: true,
		id: '123',
		isDone: false,
		due: new Date('2024-12-12T13:30'),
	},
	{
		title: 'Deserunt ut ipsum minim officia et et anim dolore velit.',
		description:
			'Labore cupidatat mollit commodo aute qui aliquip fugiat id Lorem nisi ad ipsum tempor. Sit laborum amet et excepteur sint pariatur cupidatat exercitation mollit. Consectetur ex minim exercitation nulla. Sint minim consectetur ea eiusmod consequat eiusmod dolor nulla sit ea quis cillum anim. Irure minim incididunt anim Lorem. Officia magna elit commodo consequat magna anim.',
		color: '#FBF868',
		hasTime: true,
		id: '123',
		isDone: false,
		due: new Date('2024-12-12T13:30'),
	},
	{
		title: 'Deserunt ut ipsum minim officia et et anim dolore velit.',
		description:
			'Labore cupidatat mollit commodo aute qui aliquip fugiat id Lorem nisi ad ipsum tempor. Sit laborum amet et excepteur sint pariatur cupidatat exercitation mollit. Consectetur ex minim exercitation nulla. Sint minim consectetur ea eiusmod consequat eiusmod dolor nulla sit ea quis cillum anim. Irure minim incididunt anim Lorem. Officia magna elit commodo consequat magna anim.',
		color: '#FBF868',
		hasTime: true,
		id: '123',
		isDone: false,
		due: new Date('2024-12-12T13:30'),
	},
];

function App() {
	return (
		<div className="max-w-[774px] m-auto">
			<TaskList tasks={tasks} onEditTask={(task) => {}} />
		</div>
	);
}

export default App;
