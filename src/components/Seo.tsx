import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

type ArticleMeta = {
  date?: string
  author?: string
}

type SeoProps = {
  title?: string
  description?: string
  pathname: string
  image?: string
  type?: 'website' | 'article'
  article?: ArticleMeta
  noindex?: boolean
  children?: React.ReactNode
}

type SiteMetadata = {
  title: string
  siteUrl: string
  author: string
  description: string
  image: string
  social: {
    github: string
    linkedin: string
    xing: string
  }
}

const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          author
          description
          image
          social {
            github
            linkedin
            xing
          }
        }
      }
    }
  `)

  return site.siteMetadata
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  pathname,
  image,
  type = 'website',
  article,
  noindex = false,
  children,
}) => {
  const meta = useSiteMetadata()

  const isHome = pathname === '/'
  const pageTitle =
    title && !isHome ? `${title} | ${meta.title}` : title || meta.title
  const metaDescription = description || meta.description
  const canonical = `${meta.siteUrl}${pathname}`
  const ogImage = `${meta.siteUrl}${image || meta.image}`

  const jsonLd =
    type === 'article'
      ? {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: title || meta.title,
          description: metaDescription,
          image: ogImage,
          datePublished: article?.date,
          author: {
            '@type': 'Person',
            name: article?.author || meta.author,
            url: meta.siteUrl,
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': canonical,
          },
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: meta.author,
          jobTitle: 'Fullstack Software Engineer',
          url: meta.siteUrl,
          image: ogImage,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Kirchheim unter Teck',
            addressCountry: 'DE',
          },
          sameAs: [meta.social.github, meta.social.linkedin, meta.social.xing],
        }

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      {children}
    </>
  )
}

export default Seo
