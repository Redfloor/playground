import {useEffect, useState} from "react";
import {SoundButton} from "../../SoundButton/Components/SoundButton";

interface Props {
    room: Number
}

export const RoomDisplay = ({room}: Props) => {
    const [text, setText] = useState('');
    const sound = new Audio(`./${room}/sound.mp3`);

    useEffect(() => {
        fetch(`./${room}/text.txt`)
            .then(response => response.text())
            .then(text => setText(`test text ${room}`));
    }, [room]);

    const playSound = (audio: HTMLAudioElement) => {
        sound.pause();
        sound.currentTime = 0;
        audio.play();
    }

    return (
        <div>
            <h1>{text}</h1>
            <SoundButton
                key={`soundbutton-room-${room}`}
                label="ping"
                sound={sound}
                playSound={playSound}
                color={'green'}
            />
        </div>
    )
}
