import * as React from "react";
import styled from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import { Frontmatter } from "../../pages/blog";

type Props = {
  children?: React.ReactNode;
  frontmatter: Frontmatter
};

const PostWrapper = styled.div``;

const Metadata = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 14px;
  margin-top: 3px;
  margin-bottom: 5px;
`;

const Line = styled.hr`
  margin-top: 10px;
  background-color: ${(props) => props.theme.palette.separator};
  margin-bottom: 0px;
`;

const PostComponent: React.FC<Props> = ({ children, frontmatter }) => {
  if (!children) {
    return <></>;
  }

  return (
    <PostWrapper>
      <h1>{frontmatter?.title}</h1>
      <Metadata>
        {frontmatter?.date + " - " + frontmatter?.author}
      </Metadata>
      <Line />
      <MDXProvider>
        {children}
      </MDXProvider>
    </PostWrapper>
  );
};

export default PostComponent;
