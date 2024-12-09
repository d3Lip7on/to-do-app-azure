export type TaskType = {
	id: number;
	title: string;
	isDone: boolean;
	color: string;
	description?: string;
	due?: Date;
	hasTime: boolean;
};
