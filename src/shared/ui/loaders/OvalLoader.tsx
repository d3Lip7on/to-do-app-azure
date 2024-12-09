import { Oval } from 'react-loader-spinner';

export function OvalLoader() {
	return (
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
	);
}
