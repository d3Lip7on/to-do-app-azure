import { MainButton } from './MainButton';

export function Canvas() {
	return (
		<div className="flex justify-center items-center w-[100vw] h-[100wh] bg-black/70">
			<div className="w-[1032px] h-[977px] p-[53px] bg-[#fff] flex flex-col items-center ">
				<h1 className="text-[64px]">
					<b>New Task</b>
				</h1>
				<MainButton>Create</MainButton>
			</div>
		</div>
	);
}
