import { BASE_URL, fetchWithAuth } from '../../../shared/api';

type GetTextFromAudioResponseType = {
	text: string;
};

export const getTextFromAudio = async (audioFile: Blob, token: string | null, logout: () => void): Promise<string> => {
	let response: GetTextFromAudioResponseType | undefined;
	try {
		response = await fetchWithAuth(
			`${BASE_URL}/speechtotextfunction`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/octet-stream',
				},
				body: audioFile,
			},
			token,
			logout
		);
	} catch (error) {
		console.log(error);

		throw new Error('Error while getting text from audio');
	}

	return response ? response.text : '';
};
