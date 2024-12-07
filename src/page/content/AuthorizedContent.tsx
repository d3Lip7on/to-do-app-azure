import { TaskList, TaskType } from '../../entities/task';
import { tasks } from '../mock/data/tasks';

export function AuthorizedContent() {
	return (
		<div className="flex-grow pt-[37px] px-[10px]">
			<h1 className="text-[48px] text-text-secondary text-center mb-[50px]">My Tasks</h1>
			<div className="max-w-[774px] m-auto">
				<TaskList tasks={tasks} onEditTask={(task) => {}} />
			</div>
		</div>
	);
}
