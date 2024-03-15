import React, {useState} from "react";
import styles from './soundButtonContainer.module.css'
import {AudioButtons} from "./Components/AudioButtons";

export const SoundButtonContainer = () => {
    const [isPlaying, setIsPlaying] = useState(false)

    const playSound = (audio: HTMLAudioElement) => {
        if (isPlaying) return;
        setIsPlaying(true)
        audio.play();
        setTimeout(() => setIsPlaying(false), 5000)
    }

    return (
        <div className={styles.container}>
            <AudioButtons playSound={playSound} />
            <AudioButtons playSound={playSound} />
        </div>
    )
}