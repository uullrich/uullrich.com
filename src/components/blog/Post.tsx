import * as React from 'react';
import styled from 'styled-components';
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import type { Post } from '../../pages/blog';

type Props = {
  children?: React.ReactNode,
  post: Post,
};

const PostWrapper = styled.div`

`;

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
    background-color: ${ props => props.theme.palette.separator };;
    margin-bottom: 0px;
`;

const PostComponent: React.FC<Props> = ({ post }) => {
  if (post === null) {
    return <></>
  }

  return (
    <PostWrapper>
      <h1>{post?.frontmatter?.title}</h1>
      <Metadata>
      {
        post?.frontmatter?.date + ' - ' + post.frontmatter?.author
      }
      </Metadata>
      <Line />
      <MDXProvider>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
    </PostWrapper>
  );
};

export default PostComponent;