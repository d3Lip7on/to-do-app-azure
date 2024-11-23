type ColorSchemeType = {
	accent: string;
	background: {
		secondary: string;
		primary: string;
	};
	text: {
		primary: string;
		secondary: string;
	};
	form: {
		text: string;
		background: string;
		placeholder: string;
	};
};

export const colorScheme: ColorSchemeType = {
	accent: '#FBF868',
	background: {
		secondary: '#262424',
		primary: '#3F3F3F',
	},
	text: {
		primary: '#000000',
		secondary: '#ffffff',
	},
	form: {
		background: '#FFFFFF',
		text: '#000000',
		placeholder: '#858585',
	},
};

module.exports = colorScheme;
