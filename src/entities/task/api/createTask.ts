import { BASE_URL, fetchWithAuth } from '../../../shared/api';
import { TaskApiType } from './TaskApiType';

export async function createTask(task: TaskApiType, token: string | null, logout: () => void): Promise<void> {
	const body = JSON.stringify(task);

	try {
		await fetchWithAuth(
			`${BASE_URL}/tasksfunction`,
			{
				method: 'POST',
				body,
			},
			token,
			logout
		);
	} catch (error) {
		throw new Error('Error while creating task');
	}
}
