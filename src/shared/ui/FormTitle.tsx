type FormTitleProps = {
	children?: React.ReactNode;
};

export function FormTitle({ children }: FormTitleProps) {
	return <h3 className="text-black text-[36px] font-bold">{children}</h3>;
}
