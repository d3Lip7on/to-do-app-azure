import { TaskType } from '../model/types/TaskType';
import { TaskCard } from './TaskCard';

type TaskListProps = {
	tasks: Array<TaskType>;
	onEditTask: (task: TaskType) => void;
	onDoneButtonTaskClick: (task: TaskType) => void;
};

export function TaskList({ tasks, onEditTask, onDoneButtonTaskClick }: TaskListProps) {
	return (
		<div className="flex flex-col gap-[30px]">
			{tasks.map((task) => (
				<TaskCard key={task.id} task={task} onEdit={onEditTask} onDoneButtonClick={onDoneButtonTaskClick} />
			))}
		</div>
	);
}
