import { BASE_URL, fetchWithAuth } from '../../../shared/api';
import { TaskApiType } from './TaskApiType';

export async function editTask(task: TaskApiType, token: string | null, logout: () => void): Promise<void> {
	const body = JSON.stringify(task);
	try {
		await fetchWithAuth(
			`${BASE_URL}/tasksfunction`,
			{
				method: 'PUT',
				body,
			},
			token,
			logout
		);
	} catch (error) {
		throw new Error('Error while editing task');
	}
}
