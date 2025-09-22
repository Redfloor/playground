import {ObstacleContainer, ObstacleSubStyle, ObstacleTopStyle} from "./Obstacle.styles";
import {useMemo, forwardRef} from "react";
import {ObstacleHandler} from "./ObstacleHandler";

interface ObstacleProps {
    seed: number;
    currentTime: number;
}

interface ClickableObstacle extends ObstacleProps {
    onClick: () => void;
}

// Use forwardRef to pass the ref to the component
export const Obstacle = forwardRef<HTMLDivElement, ObstacleProps>(({seed, currentTime}, ref) => {
    const age = currentTime - seed;
    const middleGapPosition = useMemo(() => Math.random() * 200 + 0, [seed]);
    const middleGapHeight = useMemo(() => 200, []);

    return (
        <ObstacleContainer ref={ref} age={age}>
            <ObstacleTopStyle middleGapPosition={middleGapPosition} middleGapHeight={middleGapHeight} />
            <ObstacleSubStyle middleGapPosition={middleGapPosition} middleGapHeight={middleGapHeight} />
        </ObstacleContainer>
    );
});
