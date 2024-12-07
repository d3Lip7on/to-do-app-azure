export const isTokenExpired = (token: string): boolean => {
	try {
		// Разделяем JWT на три части (Header, Payload, Signature)
		const payloadBase64 = token.split('.')[1]; // Вторая часть — это Payload
		const payload = JSON.parse(atob(payloadBase64)); // Декодируем Base64 строку в JSON

		// Проверяем поле exp (время истечения токена в секундах)
		if (payload.exp && typeof payload.exp === 'number') {
			return Date.now() >= payload.exp * 1000; // exp хранится в секундах, а Date.now() в миллисекундах
		}

		// Если токен не содержит exp, считаем его недействительным
		return true;
	} catch (error) {
		console.error('Invalid token format:', error);
		return true; // Если формат токена неправильный, считаем его недействительным
	}
};
