import React, { useRef, useState } from 'react';
import { getTextFromAudio } from '../api/getTextFromAudio';
import { useAuth } from '../../../app/providers/AuthProvider/AuthProvider';

type VoiceInputButtonType = {
	onTextAvailable: (text: string) => void;
};

export function VoiceInputButton({ onTextAvailable }: VoiceInputButtonType) {
	const { token, logout } = useAuth();
	const [isRecording, setisRecording] = useState<boolean>(false);
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
			const audioFile = new File([audioBlob], 'audio.wav', { type: 'audio/wav' });

			try {
				const textFromAudio = await getTextFromAudio(audioFile, token, logout);
				onTextAvailable(textFromAudio);
			} catch (error) {
				alert(error);
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
		<button onClick={switchRecording} className="p-[15px] bg-accent rounded-lg flex gap-[10px] items-center">
			<img src="/icons/audio-lines.svg" className="w-[63.75px] h-[36px]" />
			<img src="/icons/mic.svg" className="w-[18.75px] h-[34.5px]" />
		</button>
	);
}
