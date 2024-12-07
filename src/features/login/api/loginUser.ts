import { BASE_URL } from '../../../shared/api';

type LoginResponseType = {
	token: string;
};

type LoginUserType = {
	username: string;
	password: string;
};

export async function loginUser(userData: LoginUserType): Promise<LoginResponseType> {
	const response = await fetch(`${BASE_URL}/loginfunction`, {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify(userData),
	});

	if (!response.ok) {
		throw new Error('Login error');
	}

	const data: LoginResponseType = await response.json();

	return data;
}
