import React, {useState} from "react";
import styles from './soundButtonContainer.module.css'
import {AudioButtons} from "./Components/AudioButtons";

export const SoundButtonContainer = () => {
    const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement>(new Audio());

    const playSound = (audio: HTMLAudioElement) => {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        setCurrentAudio(audio);
        audio.play();
    }

    return (
        <div className={styles.container}>
            <AudioButtons playSound={playSound} />
        </div>
    )
}