import * as React from 'react'
import { graphql, PageProps, HeadProps } from 'gatsby'
import MainLayout from '../layout/MainLayout'
import Seo from '../components/Seo'
import PostComponent from '../components/blog/Post'
import type { Post } from '../pages/blog'
import AuthorDescription from '../components/blog/AuthorDescription'
import BlogNavigation from '../components/blog/BlogNavigation'
import { Content, Section } from '../components/blog/SharedStyledComponents'

type DataProps = {
  mdx: Post
}

export type PostLink = {
  slug: string
  title: string
}

type ContextProps = {
  previous: {
    frontmatter: PostLink
  }
  next: {
    frontmatter: PostLink
  }
}

const BlogPost: React.FC<PageProps<DataProps, ContextProps>> = ({
  data: {
    mdx: { frontmatter },
  },
  pageContext,
  children,
}) => {
  return (
    <MainLayout isNavigationTransparent={false} isSmallLogo={true}>
      <Content>
        <Section>
          <PostComponent frontmatter={frontmatter}>{children}</PostComponent>
          <BlogNavigation
            next={pageContext?.next?.frontmatter}
            previous={pageContext?.previous?.frontmatter}
          />
          <AuthorDescription enableBackground={true} />
        </Section>
      </Content>
    </MainLayout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        date
        author
        slug
        spoiler
        image
      }
    }
  }
`

export default BlogPost

export const Head = ({ data: { mdx } }: HeadProps<DataProps>) => {
  const { title, spoiler, author, date, slug, image } = mdx.frontmatter
  return (
    <Seo
      title={title}
      description={spoiler}
      pathname={slug}
      image={image}
      type="article"
      article={{ date, author }}
    />
  )
}
