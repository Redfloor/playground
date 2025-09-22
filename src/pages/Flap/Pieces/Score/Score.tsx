import {StyledScore} from "./Score.styles";

interface ScoreProps {
    score: string;
}

export const Score = ({score}: ScoreProps) => {
    return <StyledScore>{score}</StyledScore>
}
