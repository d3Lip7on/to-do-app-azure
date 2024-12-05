export type TaskType = {
	id: string;
	title: string;
	isDone: boolean;
	color: string;
	description?: string;
	due?: Date;
	hasTime: boolean;
};
