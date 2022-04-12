import * as React from 'react';
import styled, {keyframes} from "styled-components"
import IconFactory from "./IconFactory";

const JumpingAnimation = keyframes`
0% { 
    transform: translateY(0);
}
10% { 
    transform: translateY(0); 
}
30% { 
    transform: translateY(-20px); 
}
50% { 
    transform: translateY(0); 
}
57%  { 
    transform: translateY(-5px); 
}
64%  { 
    transform: translateY(0); 
}
100% { 
    transform: translateY(0); 
}
`;

const Jumper = styled.div`
    animation: ${JumpingAnimation};
    animation-timing-function: ease;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    transform-origin: bottom;
`;

type BouncingChevronProps = {
    children?: React.ReactNode
    width: string,
    height: string,
};

const BouncingChevron: React.FC<BouncingChevronProps> = ({width, height}) => {
    const ChevronDown = <IconFactory width={width} height={height} iconName="chevron-down" />
    return <Jumper>{ChevronDown}</Jumper>
};

export default BouncingChevron;