function checkingEmail(email: string) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

export function validateInput(...text: Array<string>) {
	text.forEach((text: string) => {
		if (!text) {
			throw new Error('empty input');
		}
	});
}
export function validatePassword(pass1: string, pass2: string) {
	if (pass1 !== pass2) {
		throw new Error('wrong password');
	}

	if (pass1.length < 5 && pass2.length < 5) {
		throw new Error('short password');
	}
}
export function validateEmail(email: string) {
	if (!checkingEmail(email)) {
		throw new Error('wrong email');
	}
}
