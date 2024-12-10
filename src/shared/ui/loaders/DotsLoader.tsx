import { ThreeDots } from 'react-loader-spinner';

type DotsLoaderProps = {
	height?: string;
	width?: string;
};

export function DotsLoader({ height, width }: DotsLoaderProps) {
	return (
		<ThreeDots
			visible={true}
			height={height}
			width={width}
			color="#000000"
			radius="9"
			ariaLabel="three-dots-loading"
			wrapperStyle={{}}
			wrapperClass=""
		/>
	);
}
