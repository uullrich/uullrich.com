import * as React from "react";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
};

const Wrapper = styled.div`
  text-align: center;
`;

const Line = styled.hr`
  margin-top: 10px;
  background-color: ${(props) => props.theme.palette.separator};
`;

const EmptyBlog: React.FC<Props> = () => {
  return (
    <Wrapper>
      <h2>More content is coming soon.</h2>
      <Line />
    </Wrapper>
  );
};

export default EmptyBlog;
