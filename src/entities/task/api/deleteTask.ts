import { BASE_URL, fetchWithAuth } from '../../../shared/api';

export async function deleteTask(taskID: number, token: string, logout: () => void): Promise<void> {
	const body = JSON.stringify({ id: taskID });
	try {
		await fetchWithAuth(
			`${BASE_URL}/tasksfunction`,
			{
				method: 'DELETE',
				body,
			},
			token,
			logout
		);
	} catch (error) {
		throw new Error('Error while deleting task');
	}
}
