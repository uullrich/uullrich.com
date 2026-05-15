import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import MainLayout from '../layout/MainLayout'
import PostPreview from '../components/blog/PostPreview'
import AuthorDescription from '../components/blog/AuthorDescription'
import EmptyBlog from '../components/blog/EmptyBlog'
import { Content, Section } from '../components/blog/SharedStyledComponents'

export type Frontmatter = {
  title: string
  slug: string
  date: string
  spoiler: string
  author: string
}

export type Post = {
  id: number
  body: string
  frontmatter: Frontmatter
}

type DataProps = {
  allMdx: {
    edges: [
      {
        node: Post
      },
    ]
  }
}

const BlogOverview: React.FC<PageProps<DataProps>> = ({ data }) => {
  const { edges: allPosts } = data.allMdx

  const posts = allPosts.filter(
    ({ node }) => !node?.frontmatter?.slug?.startsWith('/blog/demo')
  )

  return (
    <MainLayout isNavigationTransparent={false} isSmallLogo={true}>
      <Content>
        <Section>
          <AuthorDescription enableBackground={true} />
          {posts.length > 0 ? (
            posts.map(({ node: post }) => (
              <PostPreview key={post.id} post={post}></PostPreview>
            ))
          ) : (
            <EmptyBlog />
          )}
        </Section>
      </Content>
    </MainLayout>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
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
`

export default BlogOverview
