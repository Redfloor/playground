import {Obstacle} from "./Obstacle";
import {useEffect, useRef, useState} from "react";
import {SuperContainer} from "./Obstacle.styles";

interface ObstacleHandlerProps {
    up: number;
    birdRef: React.RefObject<HTMLDivElement>;
    onCollision: () => void;
}

export const ObstacleHandler = ({up, birdRef, onCollision}: ObstacleHandlerProps) => {
    const [obstacles, setObstacles] = useState<number[]>([]);
    const [currentTime, setCurrentTime] = useState(Date.now());
    const obstacleRefs = useRef<Map<number, HTMLDivElement>>(new Map());

    const addObstacle = () => {
        setObstacles((prev) => [...prev.slice(-5), Date.now()]);
    };

    useEffect(() => {
        const obstacleInterval = setInterval(() => {
            addObstacle();
        }, 1000);

        return () => {
            clearInterval(obstacleInterval);
        };
    }, []);

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setCurrentTime(Date.now());
        }, 25);

        return () => {
            clearInterval(timeInterval);
        };
    }, []);

    useEffect(() => {
        const checkCollision = () => {
            if (!birdRef.current) return;

            const birdRect = birdRef.current.getBoundingClientRect();

            for (const [key, obstacleElement] of obstacleRefs.current.entries()) {
                if (!obstacleElement) continue;

                const obstacleRect = obstacleElement.getBoundingClientRect();
                const isOverlapping =
                    birdRect.right > obstacleRect.left &&
                    birdRect.left < obstacleRect.right &&
                    birdRect.bottom > obstacleRect.top &&
                    birdRect.top < obstacleRect.bottom;

                if (isOverlapping) {
                    onCollision();
                    break;
                }
            }
        };

        const collisionInterval = setInterval(checkCollision, 25);
        return () => clearInterval(collisionInterval);
    }, [birdRef, onCollision]);

    return (
        <SuperContainer up={up}>
            {obstacles.map((value) => (
                <Obstacle
                    key={value}
                    seed={value}
                    currentTime={currentTime}
                    ref={(el) => {
                        if (el) obstacleRefs.current.set(value, el);
                        else obstacleRefs.current.delete(value);
                    }}
                />
            ))}
        </SuperContainer>
    );
};
