import {StyledBird} from "./Bird.styles";
import React from "react";

interface BirdProps {
    ref?: React.MutableRefObject<HTMLDivElement>;
}

export const Bird = React.forwardRef<HTMLDivElement, Omit<BirdProps, 'ref'>>((props, ref) => {
    return (
        <StyledBird ref={ref} />
    );
});
