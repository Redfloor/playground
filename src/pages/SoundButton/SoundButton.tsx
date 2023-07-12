// @ts-ignore
import meridaSound from '../../assets/merida.mp3'
import {useState} from "react";
import styles from './soundButton.module.css'

export const SoundButton = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const audio = new Audio(meridaSound)

    const playSound = () => {
        if (isPlaying) return;
        setIsPlaying(true)
        audio.play();
        setTimeout(() => setIsPlaying(false), 5000)
    }

    return (
        <div className={styles.container}>
            <button onClick={playSound}>A New Hand</button>
        </div>
    );
}