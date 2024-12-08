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

export function mapTaskToApi() {
	// TODO: handle this case
}
