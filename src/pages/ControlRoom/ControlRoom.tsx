import styles from './controlRoom.module.css'
import {useState} from "react";
import {RoomSwitch} from "./Components/RoomSwitch";
import {RoomDisplay} from "./Components/RoomDisplay";


export const ControlRoom = () => {
    const [room, setRoom] = useState(0)

    return (<div className={styles.container}>
        <RoomSwitch room={room} setRoom={setRoom} />
        <RoomDisplay room={room} />
    </div>)
}
