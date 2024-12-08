import { BASE_URL, fetchWithAuth } from '../../../shared/api';
import { TaskApiType } from './TaskApiType';

export async function getTasks(token: string, logout: () => void): Promise<Array<TaskApiType>> {
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
		throw new Error('Error while getting tasks');
	}

	return data;
}
