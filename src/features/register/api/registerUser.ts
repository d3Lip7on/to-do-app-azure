import { BASE_URL } from '../../../shared/api';

type RegisterUserParams = {
	username: string;
	password: string;
};

export async function registerUser(userData: RegisterUserParams) {
	const response = await fetch(`${BASE_URL}/registerfunction`, {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify(userData),
	});

	if (!response.ok) {
		throw new Error('Registration error');
	}
}
