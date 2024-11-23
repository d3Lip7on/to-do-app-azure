// import React from 'react';

// type MainButtonProps = {
// 	width?: string;
// 	children: React.ReactNode;
// };

// export function MainButton({ width, children }: MainButtonProps) {
// 	return (
// 		<button
// 			style={{ width: width }}
// 			className="flex justify-center items-center transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-[#f0ed20] active:scale-95 active:transition w-[100%] p-[20px] h-[86px] bg-[#FBF868] text-[40px] font-bold"
// 		>
// 			{children}
// 		</button>
// 	);
// }
import React from 'react';

type MainButtonProps = {
	width?: string;
	children: React.ReactNode;
	onClick: () => void;
};

export function MainButton({ width, children, onClick }: MainButtonProps) {
	return (
		<button
			onClick={() => {
				onClick();
			}}
			style={{ width: width }}
			className="flex justify-center items-center transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-[#f0ed20] active:scale-95 active:transition w-[100%] p-[20px] h-[86px] bg-[#FBF868] text-[40px] font-bold"
		>
			{children}
		</button>
	);
}
