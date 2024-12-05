import { TaskType } from '../model/types/TaskType';
import { TaskCard } from './TaskCard';

type TaskListProps = {
	tasks: Array<TaskType>;
	onEditTask: (task: TaskType) => void;
};

export function TaskList({ tasks, onEditTask }: TaskListProps) {
	return (
		<div className="flex flex-col gap-[30px]">
			{tasks.map((task) => (
				<TaskCard task={task} onEdit={onEditTask} />
			))}
		</div>
	);
}
