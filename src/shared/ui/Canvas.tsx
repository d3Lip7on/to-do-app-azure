type CanvasProps = {
	children: React.ReactNode;
	width?: string;
};

export function Canvas({ children, width }: CanvasProps) {
	return (
		<div className="p-[39px] bg-text-secondary flex flex-col  " style={{ width: width }}>
			{children}
		</div>
	);
}
