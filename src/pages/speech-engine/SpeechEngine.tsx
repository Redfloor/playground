import React, { useEffect, useRef, useState } from 'react';
import { SpeechBlobSet, SpeechPhrase } from './Components/SpeechBlob';

const getTimestamp = () => new Date().toISOString();

export const SpeechEngine = () => {
    const [phrases, setPhrases] = useState<SpeechPhrase[]>([]);
    const recognitionRef = useRef<SpeechRecognition | null>(null);

    useEffect(() => {
        // @ts-ignore
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert('Speech Recognition API not supported in this browser.');
            return;
        }
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = false;
        recognition.lang = 'en-UK';

        recognition.onresult = (event: SpeechRecognitionEvent) => {
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    const text = event.results[i][0].transcript.trim();
                    setPhrases(prev => [
                        ...prev,
                        {
                            id: `${Date.now()}-${Math.random()}`,
                            timestamp: getTimestamp(),
                            speaker: 'user',
                            text,
                        }
                    ]);
                }
            }
        };

        recognition.onerror = (event: any) => {
            console.error('Speech recognition error', event);
        };

        recognitionRef.current = recognition;
        recognition.start();

        return () => {
            recognition.stop();
        };
    }, []);

    return (
        <div>
            <h1>Speech Engine</h1>
            <p>Speak into your microphone. Your words will appear below.</p>
            <SpeechBlobSet phrases={phrases} />
        </div>
    );
};
