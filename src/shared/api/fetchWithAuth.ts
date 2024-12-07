import { isTokenExpired } from '../utilities/tokenUtils';

export const fetchWithAuth = async (url: string, options: RequestInit = {}, token: string | null, logout: () => void) => {
	if (!token || !isTokenExpired(token)) {
		logout();
		throw new Error('Session expired. Please log in again.');
	}

	const headers = {
		...options.headers,
		Authorization: `Bearer ${token}`,
	};

	const response = await fetch(url, {
		...options,
		headers,
	});

	if (!response.ok) {
		throw new Error('Request failed');
	}

	return response.json();
};
