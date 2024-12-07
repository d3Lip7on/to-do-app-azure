export function normalizeDateNumber(number: Number): string {
	return number.toString().length === 1 ? `0${number}` : number.toString();
}

export function getDayMonthYearFromDate(date: Date) {
	const day = normalizeDateNumber(date.getDate());
	const month = normalizeDateNumber(date.getMonth() + 1);
	const year = date.getFullYear();
	return `${day}/${month}/${year}`;
}

export function getTimeFromDate(date: Date) {
	const hours = normalizeDateNumber(date.getHours());
	const minutes = normalizeDateNumber(date.getMinutes());
	return `${hours}:${minutes}`;
}
