import styles from '../controlRoom.module.css'

// TODO: update rooms to be an object with room number as key and room name as value
interface RoomSwitchProps {
    room: number;
    setRoom: (room: number) => void;
}

export const RoomSwitch = ({room, setRoom}: RoomSwitchProps) => {
    const rooms = [0, 1, 2]
    const outRooms = () => rooms.map((r, k) => {
        return (
            <button className={r === room ? styles.room : styles.activeRoom} onClick={() => setRoom(r)} key={`RoomSwitch-${k}`}>
                {r}
            </button>
        )
    })
    return (
        <div className={styles.roomContainer}>
            {outRooms()}
    </div>
    )
}
