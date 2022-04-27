import * as React from 'react';
import { graphql, PageProps } from "gatsby"
import MainLayout from '../layout/MainLayout';
import PostComponent from '../components/blog/Post';
import type { Post } from '../pages/blog';
import AuthorDescription from '../components/blog/AuthorDescription';
import BlogNavigation from '../components/blog/BlogNavigation';
import { Content, Section } from '../components/blog/SharedStyledComponents';

type DataProps = {
  mdx: Post,
};

export type PostLink = {
  slug: string,
  title: string,
}

type ContextProps = {
  previous: {
    frontmatter: PostLink,
  }
  next: {
    frontmatter: PostLink
  }
}

const BlogPost: React.FC<PageProps<DataProps, ContextProps>> = ({ data: { mdx: post }, pageContext }) => {

  return (
    <MainLayout
      isNavigationTransparent={false}
      isSmallLogo={true}>
      <Content>
        <Section>
          <PostComponent post={post} />
          <BlogNavigation next={pageContext?.next?.frontmatter} previous={pageContext?.previous?.frontmatter} />
          <AuthorDescription enableBackground={true} />
        </Section>
      </Content>
    </MainLayout>)
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
        author
      }
    }
  }
`;

export default BlogPost;