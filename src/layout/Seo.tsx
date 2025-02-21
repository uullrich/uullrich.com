import React from 'react'
import Helmet, { HelmetProps } from 'react-helmet'
import config from '../../gatsby-config'

const title = (config?.siteMetadata?.title as string) || ''
const siteDescription = (config?.siteMetadata?.description as string) || ''
const siteKeywords = (config?.siteMetadata?.keywords as string) || ''

const meta: HelmetProps['meta'] = [
  {
    name: 'description',
    content: siteDescription,
  },
  {
    name: 'keywords',
    content: siteKeywords,
  },
  {
    name: 'twitter:title',
    content: title,
  },
  {
    name: 'twitter:description',
    content: siteDescription,
  },
  {
    name: 'og:title',
    content: title,
  },
  {
    name: 'og:description',
    content: siteDescription,
  },
]

const SeoWrapper = ({ children }: { children: any }) => {
  return (
    <div>
      <Helmet title={title} meta={meta} />
      {children}
    </div>
  )
}

export default SeoWrapper
