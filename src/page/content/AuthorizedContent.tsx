import { useEffect, useState } from 'react';
import { TaskList, TaskType } from '../../entities/task';
import { MainButton } from '../../shared/ui';
import { TaskModal } from '../../features/manage-task';
import { editTask, getTasks } from '../../entities/task/api';
import { useAuth } from '../../app/providers/AuthProvider/AuthProvider';
import { Oval } from 'react-loader-spinner';
import { mapTaskFromApi, mapTaskToApi } from '../../entities/task/model/types/mappers';

export function AuthorizedContent() {
	const [isModalWindowOpen, setModalwindowOpen] = useState<boolean>(false);
	const [isEditWindowOpen, setEditWindowOpen] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { token, logout } = useAuth();
	const [tasks, setTasks] = useState<Array<TaskType>>([]);

	const [currentEditingTask, setCurrentEditingTask] = useState<TaskType | undefined>(undefined);

	async function updateTasks() {
		try {
			setIsLoading(!isLoading);
			const tasksApi = await getTasks(token!, logout);
			const tasks = tasksApi.map((taskApi) => {
				return mapTaskFromApi(taskApi);
			});
			setTasks(tasks);
		} catch (err) {
			alert(err);
		} finally {
			setIsLoading(isLoading);
		}
	}

	useEffect(() => {
		if (token && !isEditWindowOpen && !isModalWindowOpen) {
			updateTasks();
		}
	}, [isEditWindowOpen, isModalWindowOpen]);

	return (
		<div className="relative pb-[200px]">
			<div className="pt-[37px] px-[10px] flex flex-col items-center">
				<h1 className="text-[48px] text-text-secondary text-center mb-[30px]">My Tasks</h1>
				<div className="max-w-[774px] w-full m-auto pb-[37px]">
					{isLoading ? (
						<div className="flex flex-col items-center">
							<Oval
								visible={true}
								height="80"
								width="80"
								color="#FBF868"
								secondaryColor="#FBF868"
								ariaLabel="oval-loading"
								wrapperStyle={{}}
								wrapperClass=""
							/>
						</div>
					) : (
						<TaskList
							tasks={tasks}
							onEditTask={(task: TaskType) => {
								setCurrentEditingTask(task);
								setEditWindowOpen(true);
							}}
							onDoneButtonTaskClick={async (task: TaskType) => {
								const switchedDoneTask: TaskType = { ...task, isDone: !task.isDone };
								await editTask(mapTaskToApi(switchedDoneTask), token, logout);
								updateTasks();
							}}
						/>
					)}
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
					/>
				)}
				{isEditWindowOpen && (
					<TaskModal
						mode="edit"
						isOpen={isEditWindowOpen}
						onClose={() => {
							setEditWindowOpen(false);
						}}
						initialData={currentEditingTask}
					/>
				)}
			</div>
		</div>
	);
}
