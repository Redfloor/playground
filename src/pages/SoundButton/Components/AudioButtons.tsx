// @ts-ignore
import meridaSound from "src/assets/merida.mp3";
import {SoundButton, SoundButtonProps} from "./SoundButton";
import {useEffect, useState} from "react";
import {randomColor} from "../../../utils/utils";

interface Props {
    playSound: (sound: HTMLAudioElement) => void,
}

export const AudioButtons = ({playSound}: Props) => {
    const [sounds, setSounds] = useState<SoundButtonProps[]>([]);
    useEffect(() => {
        const out = () => [{
            label: 'A New Hand',
            sound: new Audio(meridaSound),
            playSound: playSound,
            color: randomColor({index: 0}),
        }, {
            label: 'A New Hand',
            sound: new Audio(meridaSound),
            playSound: playSound,
            color: randomColor({index: 1}),
        }, {
            label: 'A New Hand',
            sound: new Audio(meridaSound),
            playSound: playSound,
            color: randomColor({index: 2}),
        }, {
            label: 'A New Hand',
            sound: new Audio(meridaSound),
            playSound: playSound,
            color: randomColor({index: 3}),
        }, {
            label: 'A New Hand',
            sound: new Audio(meridaSound),
            playSound: playSound,
            color: randomColor({index: 4}),
        }, {
            label: 'A New Hand',
            sound: new Audio(meridaSound),
            playSound: playSound,
            color: randomColor({index: 5}),
        }, {
            label: 'A New Hand',
            sound: new Audio(meridaSound),
            playSound: playSound,
            color: randomColor({index: 6}),
        }, {
            label: 'A New Hand',
            sound: new Audio(meridaSound),
            playSound: playSound,
            color: randomColor({index: 6}),
        }]
        setSounds(out());
    }, [setSounds, playSound]);

    return <>
        {sounds.map((s, i) => (
            <SoundButton
                key={`soundbutton-${i}`}
                label={s.label}
                sound={s.sound}
                playSound={playSound}
                color={s.color}
            />
        ))}
    </>
}