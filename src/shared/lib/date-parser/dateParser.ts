export function normalizeDateNumber(number: Number): string {
	return number.toString().length === 1 ? `0${number}` : number.toString();
}

export function getTimeFromDate(date: Date) {
	const hours = normalizeDateNumber(date.getHours());
	const minutes = normalizeDateNumber(date.getMinutes());
	return `${hours}:${minutes}`;
}

export function parseDateWithTimeToStringStandart(date: Date, hasTime: boolean): string {
	const year = normalizeDateNumber(date.getFullYear());
	const month = normalizeDateNumber(date.getMonth() + 1);
	const day = normalizeDateNumber(date.getDate());
	const dateString = `${year}-${month}-${day}`;
	let time: string = '';
	if (hasTime) {
		const hours = normalizeDateNumber(date.getHours());
		const minutes = normalizeDateNumber(date.getMinutes());
		time = `T${hours}:${minutes}`;
	}
	return `${dateString}${time}`;
}

export function parseDateToStringStandart(date: Date): string {
	const year = normalizeDateNumber(date.getFullYear());
	const month = normalizeDateNumber(date.getMonth() + 1);
	const day = normalizeDateNumber(date.getDate());
	return `${year}-${month}-${day}`;
}
