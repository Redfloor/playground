import {styled} from "styled-components";

interface SuperContainer {
    up: number;
}

interface ObstacleContainerProps {
    age: number;
}

interface ObstacleInnerProps {
    middleGapPosition: number;
    middleGapHeight: number;
}

export const SuperContainer = styled.div<SuperContainer>`
    position: relative;
    width: 100%;
    height: 100%;
    bottom: calc(255px - ${({up}) => up}px);
    overflow: hidden;
`;

export const ObstacleContainer = styled.div<ObstacleContainerProps>`
    position: absolute;    
    height: 100%;
    width: 20%; // Todo: math this off of score
    left: calc(100% - ${({age}) => (age / 5000) * 100}%);
`

export const ObstacleTopStyle = styled.div<ObstacleInnerProps>`
    position: absolute;
    background-color: #33dd33;
    width: 50px;
    height: ${({middleGapPosition}) => middleGapPosition}px;
    top: 0;
    left: 0;
`;

export const ObstacleSubStyle = styled.div<ObstacleInnerProps>`
    position: absolute;
    background-color: #33dd33;
    width: 50px;
    height: calc(100% - ${({middleGapPosition, middleGapHeight}) => middleGapPosition + middleGapHeight}px);
    bottom: 0;
    left: 0;
`;
