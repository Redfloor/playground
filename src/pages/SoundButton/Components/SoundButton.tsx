

export interface SoundButtonProps {
    label: string,
    sound: HTMLAudioElement,
    playSound: (sound: HTMLAudioElement) => void,
    color: string;
}

export const SoundButton = ({playSound, sound, color, label}: SoundButtonProps) => {
    return (
        <button
            onClick={() => playSound(sound)}
            style={{backgroundColor: color}}
        >
            {label}
        </button>
    );
}
