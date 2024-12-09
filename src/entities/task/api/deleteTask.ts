import { BASE_URL, fetchWithAuth } from '../../../shared/api';

export async function deleteTask(taskID: number, token: string | null, logout: () => void): Promise<void> {
	try {
		await fetchWithAuth(
			`${BASE_URL}/tasksfunction?id=${taskID}`,
			{
				method: 'DELETE',
			},
			token,
			logout
		);
	} catch (error) {
		throw new Error('Error while deleting task');
	}
}
