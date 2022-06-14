import * as React from "react";
import styled from "styled-components";

type IconProps = {
  children?: React.ReactNode;
  width: string;
  height: string;
  iconSvg: React.ReactNode;
};

type WrapperProps = {
  width: string;
  height: string;
};

const Wrapper = styled.div<WrapperProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Icon: React.FC<IconProps> = ({ width, height, iconSvg }) => {
  return (
    <Wrapper width={width} height={height}>
      {iconSvg}
    </Wrapper>
  );
};

export default Icon;
