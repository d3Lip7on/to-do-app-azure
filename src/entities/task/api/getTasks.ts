import { BASE_URL, fetchWithAuth } from '../../../shared/api';
import { TaskApiType } from '../model/types/TaskApiType';

export async function getTasks(token: string | null, logout: () => void): Promise<Array<TaskApiType>> {
	let data: Array<TaskApiType> = [];
	try {
		data = await fetchWithAuth(
			`${BASE_URL}/tasksfunction`,
			{
				method: 'GET',
			},
			token,
			logout
		);
	} catch (error) {
		if (error === 'Request failed') {
			throw new Error('Error while fetching tasks');
		}
		throw error;
	}

	return data;
}
