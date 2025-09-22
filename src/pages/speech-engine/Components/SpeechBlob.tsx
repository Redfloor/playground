export interface SpeechPhrase {
    id: string;
    timestamp: string;
    speaker: string;
    text: string;
}

export interface SpeechBlobProps {
    phrases: SpeechPhrase[];
}

export const SpeechBlob = ({id, timestamp, speaker, text}:SpeechPhrase) => {
    // This will be a wigdet that displays a text record of a conversation.
    // It will show a series of phrases, each with a timestamp and speaker label.
    return (
        <div key={id} style={{ marginBottom: '10px' }}>
            <strong>{speaker}</strong> <span>{timestamp}</span>
            <p>{text}</p>
        </div>
    );
}

export const SpeechBlobSet = ({phrases}: SpeechBlobProps) => {
    return (
        <div>
            {phrases.map((phrase) => (
                <SpeechBlob {...phrase} />
            ))}
        </div>
    );
}
