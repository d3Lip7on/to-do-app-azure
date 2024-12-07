import { useState } from 'react';
import { TaskList, TaskType } from '../../entities/task';
import { tasks } from '../mock/data/tasks';
import { MainButton } from '../../shared/ui';
import { TaskModal } from '../../features/manage-task';

export function AuthorizedContent() {
	const [isModalWindowOpen, setModalwindowOpen] = useState<boolean>(false);
	const [isEditWindowOpen, setEditWindowOpen] = useState<boolean>(false);

	const [currentEditingTask, setCurrentEditingTask] = useState<TaskType | undefined>(undefined);

	return (
		<div className="relative pb-[200px]">
			<div className="pt-[37px] px-[10px] flex flex-col items-center">
				<h1 className="text-[48px] text-text-secondary text-center mb-[50px]">My Tasks</h1>
				<div className="max-w-[774px] m-auto pb-[37px]">
					<TaskList
						tasks={tasks}
						onEditTask={(task) => {
							setCurrentEditingTask(task);
							setEditWindowOpen(true);
							console.log(isEditWindowOpen);
						}}
					/>
				</div>
				<MainButton
					width="387px"
					onClick={() => {
						setModalwindowOpen(true);
					}}
				>
					+ New Task
				</MainButton>
				{isModalWindowOpen && (
					<TaskModal
						mode="create"
						isOpen={isModalWindowOpen}
						onClose={() => {
							setModalwindowOpen(false);
						}}
						onSubmit={() => {}}
						onDelete={() => {}}
					/>
				)}
				{isEditWindowOpen && (
					<TaskModal
						mode="edit"
						isOpen={isEditWindowOpen}
						onClose={() => {
							setEditWindowOpen(false);
						}}
						onSubmit={() => {}}
						onDelete={() => {}}
						initialData={currentEditingTask}
					/>
				)}
			</div>
		</div>
	);
}
