export function Header() {
	return (
		<div className="bg-background-secondary flex justify-between px-[75px]">
			<div className="flex gap-[7px] items-center">
				<img className="w-[31px] h-[28px]" src="/icons/logo.svg" />
				<h3 className="text-[30px] text-text-secondary">
					<span className="text-accent">T</span>ask <span className="text-accent">M</span>aster
				</h3>
			</div>
			<div className="flex gap-[37px] items-center text-[24px]">
				<p className="text-accent">Not logged in</p>
				<button className="h-[52px] px-[15px] bg-accent flex items-center">Log in</button>
			</div>
		</div>
	);
}
