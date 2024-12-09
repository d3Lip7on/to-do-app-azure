import { parseDateWithTimeToStringStandart } from '../../../../shared/lib';
import { TaskApiType, TaskType } from '..';

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
	const due = parseDateWithTimeToStringStandart(task.due, task.hasTime);

	return { id: task.id, color: task.color, isDone: task.isDone, title: task.title, description: task.description, due: due };
}
