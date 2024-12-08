import { TaskApiType } from '../api';
import { TaskType } from '../model';

export function mapTaskFromApi(taskFromApi: TaskApiType): TaskType {
	let due: Date | undefined = undefined;
	let hasTime = false;
	if (taskFromApi.due != null) {
		due = new Date(taskFromApi.due);
		hasTime = taskFromApi.due.includes('T') && taskFromApi.due.split('T')[1]?.includes(':');
	}
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
	let due: string | undefined;
	if (task.due != null) {
		const taskDue = task.due;
		const date = `${taskDue.getFullYear()}-${taskDue.getMonth()}-${taskDue.getDate()}`;
		let time: string = '';
		if (task.hasTime) {
			time = `T${taskDue.getHours()}:${taskDue.getMinutes()}`;
		}
		due = `${date}${time}`;
	}

	return { id: task.id, color: task.color, isDone: task.isDone, title: task.title, description: task.description, due: due };
}
