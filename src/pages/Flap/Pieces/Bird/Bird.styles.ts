import {keyframes, styled} from "styled-components";

const flapAnimation = keyframes`
    0% { transform: translate(-50%, -50%) }
    25% { transform: translate(-50%, -60%) }
    50% { transform: translate(-50%, -50%) }
    75% { transform: translate(-50%, -40%) }
    100% { transform: translate(-50%, -50%) }
`;

export const StyledBird = styled.div`
    width: 50px;
    height: 50px;
    background-color: #ff0;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: ${flapAnimation};
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
`;
