import { normalizeDateNumber } from '../../../shared/lib/dateParser';
import { TaskApiType } from '../api';
import { TaskType } from '../model';

export function mapTaskFromApi(taskFromApi: TaskApiType): TaskType {
	const due = new Date(taskFromApi.due);
	const hasTime = taskFromApi.due.includes('T') && taskFromApi.due.split('T')[1]?.includes(':');

	return {
		id: taskFromApi.id,
		color: taskFromApi.color,
		isDone: taskFromApi.isDone,
		title: taskFromApi.title,
		description: taskFromApi.description,
		due: due,
		hasTime: hasTime,
	};
}

export function mapTaskToApi(task: TaskType): TaskApiType {
	const taskDue = task.due;
	const year = normalizeDateNumber(taskDue.getFullYear());
	const month = normalizeDateNumber(taskDue.getMonth() + 1);
	const day = normalizeDateNumber(taskDue.getDate());
	const date = `${year}-${month}-${day}`;
	let time: string = '';
	if (task.hasTime) {
		const hours = normalizeDateNumber(taskDue.getHours());
		const minutes = normalizeDateNumber(taskDue.getMinutes());
		time = `T${hours}:${minutes}`;
	}
	const due = `${date}${time}`;

	return { id: task.id, color: task.color, isDone: task.isDone, title: task.title, description: task.description, due: due };
}
