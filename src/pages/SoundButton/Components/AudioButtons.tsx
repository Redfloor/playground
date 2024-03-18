// @ts-ignore
import meridaSound from "src/assets/merida.mp3";
// @ts-ignore
import noMyBoySound from "src/assets/myboy.mp3";
// @ts-ignore
import babeSound from "src/assets/babe.mp3";
import {SoundButton, SoundButtonProps} from "./SoundButton";
import {useEffect, useState} from "react";
import {randomColor} from "../../../utils/utils";

interface Props {
    playSound: (sound: HTMLAudioElement) => void,
}

export const AudioButtons = ({playSound}: Props) => {
    const [sounds, setSounds] = useState<SoundButtonProps[]>([]);

    // Cleanest place this can be for the moment. Don't wanna move it to a standalone js file because of the func deps.
    // If you wanna work in this file, suggest collapsing the useEffect.
    useEffect(() => {
        const out = () => [{
            label: 'A New Hand',
            sound: new Audio(meridaSound),
            playSound: playSound,
            color: randomColor({index: 0}),
        }, {
            label: 'No, My boy!',
            sound: new Audio(noMyBoySound),
            playSound: playSound,
            color: randomColor({index: 1}),
        }, {
            label: 'Voodoo',
            sound: new Audio(babeSound),
            playSound: playSound,
            color: randomColor({index: 2}),
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