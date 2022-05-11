import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import type { Post } from '../../pages/blog';

type Props = {
  children?: React.ReactNode,
  post: Post,
};

const PreviewWrapper = styled.div`
  .gatsbyLink {
    text-shadow: none;
    text-decoration: none;
    background-image: none;

    &>h2:hover {
      color: ${ props => props.theme.palette.primary.main };
    }
  }
`;

const Line = styled.hr`
    margin-top: 10px;
    background-color: ${ props => props.theme.palette.separator };
    margin-bottom: 0px;
`;

const Metadata = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 14px;
  margin-top: 3px;
  margin-bottom: 5px;
`;

const PostPreview: React.FC<Props> = ({ post }) => {
  return (
    <PreviewWrapper>
      <Link className='gatsbyLink' to={'../' + post?.frontmatter?.slug}>
        <h2>{post?.frontmatter?.title}</h2>
      </Link>      
      <Line />
      <Metadata>
        <div>{post?.frontmatter?.date}</div>
        -
        <div>{post?.frontmatter?.author}</div>
      </Metadata>
        <div>{post?.frontmatter?.spoiler}</div>
    </PreviewWrapper>
  )
};

export default PostPreview;