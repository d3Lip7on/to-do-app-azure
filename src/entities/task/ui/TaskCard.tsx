import { getDayMonthYearFromDate, getTimeFromDate } from '../lib/dateParser';
import { TaskType } from '../model/types/TaskType';

type TaskCardProps = {
	task: TaskType;
	onEdit: (task: TaskType) => void;
};

export function TaskCard({ task, onEdit }: TaskCardProps) {
	return (
		<div>
			{task.due != null && <h3 className="pl-[15px] text-[27px] text-text-secondary leading-[27px]">{getDayMonthYearFromDate(task.due)}</h3>}

			<div
				className=" text-text-primary"
				style={{
					background: task.color,
				}}
			>
				<div className="flex gap-[15px] h-full pl-[15px] pr-[5px] py-[5px]">
					<button className="w-[28px] h-[28px] border-[4px] border-black rounded-sm flex-shrink-0 self-center">
						{task.isDone && <img src="/icons/done.svg" className="w-full h-full object-cover scale-[1.2]" />}
					</button>
					<div className="flex flex-col flex-grow">
						<h3 className="text-[24px] leading-[24px]">{task.title}</h3>
						<p className="text-[18px]">{task.description}</p>
					</div>
					<div className="flex flex-col justify-between items-end flex-shrink-0">
						<button
							onClick={() => {
								onEdit(task);
							}}
						>
							<img src="/icons/edit.svg" className="w-[24px] h-[24px]" alt="edit task" />
						</button>
						{task.due != null && task.hasTime && <p className="text-[18px]">due {getTimeFromDate(task.due)}</p>}
					</div>
				</div>
			</div>
		</div>
	);
}
