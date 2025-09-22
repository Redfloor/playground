import {useEffect, useMemo, useRef, useState} from "react";
import {Container} from "./Flap.styles";
import {Bird} from "./Pieces/Bird/Bird";
import {Terrain} from "./Pieces/Terrain/Terrain";
import {Score} from "./Pieces/Score/Score";
import {tick} from "./Logic/Tick";
import {KillScreen} from "./Pieces/KillScreen/KillScreen";
import {ObstacleHandler} from "./Pieces/Obstacle/ObstacleHandler";

export const Flap = () => {
    const birdRef = useRef<HTMLDivElement>(null);
    const tickInterval = useRef<ReturnType<typeof setInterval> | null>(null)
    const [gameIsOver, setGameIsOver] = useState(false);
    const [score, setScore] = useState(0);
    const downRate = 2.5;
    const tickRate =  50
    const maxDownRate = 100;

    const [up, setUp] = useState(200);
    const [upMomentum, setUpMomentum] = useState(0);
    const [upArrowDown, setUpArrowDown] = useState(false);

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.code === "ArrowUp") {
            setUpArrowDown(true);
        }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
        if (event.code === "ArrowUp") {
            setUpArrowDown(false);
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    useEffect(() => {
        const bird = birdRef.current;
        tickInterval.current = setInterval(() => {
            tick({
                up,
                bird,
                setUp,
                setUpMomentum,
                upMomentum,
                downRate,
                maxDownRate,
                gameIsOver,
                setGameIsOver,
                upArrowDown,
            });
        }, tickRate);

        return () => {
            if (tickInterval.current) {
                clearInterval(tickInterval.current);
            }
        };
    }, [birdRef.current, up, upMomentum]);

    return (
        <Container>
            <Terrain up={up}/>
            <ObstacleHandler up={up} birdRef={birdRef} onCollision={() => {setGameIsOver(true)}}/>
            <Score score={up.toString()}/>
            <Bird key={"the-bird"} ref={birdRef as React.MutableRefObject<HTMLDivElement>}/>
            {gameIsOver && <KillScreen />}
        </Container>
    )
}
