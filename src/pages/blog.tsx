import * as React from "react";
import { graphql, PageProps } from "gatsby";
import MainLayout from "../layout/MainLayout";
import PostPreview from "../components/blog/PostPreview";
import AuthorDescription from "../components/blog/AuthorDescription";
import EmptyBlog from "../components/blog/EmptyBlog";
import { Content, Section } from "../components/blog/SharedStyledComponents";

export type Post = {
  id: number;
  body: string;
  frontmatter: {
    title: string;
    slug: string;
    date: string;
    spoiler: string;
    author: string;
  };
};

type DataProps = {
  allMdx: {
    edges: [
      {
        node: Post;
      }
    ];
  };
};

const BlogOverview: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  const { edges: posts } = data.allMdx;

  return (
    <MainLayout isNavigationTransparent={false} isSmallLogo={true}>
      <Content>
        <Section>
          <AuthorDescription enableBackground={true} />
          {posts.length > 0 ? (
            posts.map(({ node: post }, index) => (
              <PostPreview key={index} post={post}></PostPreview>
            ))
          ) : (
            <EmptyBlog />
          )}
        </Section>
      </Content>
    </MainLayout>
  );
};

export const pageQuery = graphql`
  query blogIndex {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          body
          frontmatter {
            author
            title
            slug
            date
            spoiler
          }
        }
      }
    }
  }
`;

export default BlogOverview;
