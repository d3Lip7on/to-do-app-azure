import React, { useRef, useState } from 'react';
import { getTextFromAudio } from '../api/getTextFromAudio';
import { useAuth } from '../../../app/providers/AuthProvider/AuthProvider';
import { convertAudioToWav } from '../model/utilities/convertAudioToWav';
import { AudioLines, DotsLoader } from '../../../shared/ui';

type VoiceInputButtonType = {
	onTextAvailable: (text: string) => void;
};

export function VoiceInputButton({ onTextAvailable }: VoiceInputButtonType) {
	const { token, logout } = useAuth();
	const [isRecording, setisRecording] = useState<boolean>(false);
	const [isLoadingAudio, setIsLoadingAudio] = useState<boolean>(false);
	const mediaRecorderRef = useRef<MediaRecorder | null>(null);
	const audioChunksRef = useRef<Blob[]>([]);

	async function switchRecording() {
		if (!isRecording) {
			startRecording();
		} else {
			stopRecording();
		}
	}

	async function startRecording() {
		const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
		const mediaRecorder = new MediaRecorder(stream);
		mediaRecorderRef.current = mediaRecorder;

		mediaRecorder.ondataavailable = (event) => {
			audioChunksRef.current.push(event.data);
		};

		mediaRecorder.onstop = async () => {
			const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
			const modifiedAudioBlob = await convertAudioToWav(audioBlob);
			try {
				setIsLoadingAudio(true);
				const textFromAudio = await getTextFromAudio(modifiedAudioBlob, token, logout);
				onTextAvailable(textFromAudio);
			} catch (error) {
				alert(error);
			} finally {
				setIsLoadingAudio(false);
			}
			audioChunksRef.current = [];
		};

		setisRecording(true);
		mediaRecorder.start();
	}

	function stopRecording() {
		mediaRecorderRef.current?.stop();
		setisRecording(false);
	}

	return (
		<button
			onClick={switchRecording}
			className="p-[10px] m-[10px] rounded-lg flex gap-[10px] items-center transition-transform duration-100 ease-in-out hover:scale-105 active:scale-95"
		>
			{isLoadingAudio ? (
				<DotsLoader height="34.5px" width="18.75px" />
			) : (
				<>{isRecording ? <AudioLines /> : <img src="/icons/mic.svg" className="w-[18.75px] h-[34.5px]" />}</>
			)}
		</button>
	);
}
