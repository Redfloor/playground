interface TickParams {
    bird: HTMLDivElement | null;
    up: number;
    setUp: (value: number) => void;
    setUpMomentum: (value: number) => void;
    upMomentum: number;
    downRate: number;
    maxDownRate: number;
    gameIsOver: boolean;
    setGameIsOver: (value: boolean) => void;
    upArrowDown: boolean;
}

interface BirdOnGroundParams {
    bird: HTMLDivElement | null;
    up: number;
}

interface handleMomentumParams {
    upArrowDown: boolean;
    upMomentum: number;
    maxDownRate: number;
    downRate: number;
    setUpMomentum: (value: number) => void;
}

const isBirdOnGround = ({bird, up}: BirdOnGroundParams): boolean => {
    if (bird) {
        const screenHeight = document.documentElement.getBoundingClientRect().height - 80;
        const birdRect = bird.getBoundingClientRect();
        const birdTop = birdRect.bottom;
        const threshold = screenHeight/2 - birdTop + birdRect.height;
        if (threshold >= up) {
            return true;
        }
    }
    return false;
};

const handleMomentum = ({upArrowDown, upMomentum, maxDownRate, downRate, setUpMomentum}: handleMomentumParams) => {
    if (upArrowDown) {
        setUpMomentum(Math.min(upMomentum + downRate, maxDownRate));
    } else {
        setUpMomentum(Math.max(upMomentum - downRate, -maxDownRate));
    }
}

export const tick = ({bird, up, setUp, setUpMomentum, upMomentum, downRate, maxDownRate, gameIsOver, setGameIsOver, upArrowDown}: TickParams) => {
    if (bird && !gameIsOver) {
        setUp(up + upMomentum);
        handleMomentum({
            upArrowDown,
            upMomentum,
            maxDownRate,
            downRate,
            setUpMomentum,
        })
        if (isBirdOnGround({bird, up})) {
            setGameIsOver(true);
        }
    }
};
