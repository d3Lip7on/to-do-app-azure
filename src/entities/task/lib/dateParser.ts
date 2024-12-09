import { normalizeDateNumber } from '../../../shared/lib';

export function getDayMonthYearFromDate(date: Date) {
	const day = normalizeDateNumber(date.getDate());
	const month = normalizeDateNumber(date.getMonth() + 1);
	const year = date.getFullYear();
	return `${day}/${month}/${year}`;
}
