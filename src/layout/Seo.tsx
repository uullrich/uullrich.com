import React from 'react'
import Helmet from 'react-helmet'
import config from '../../gatsby-config'

const title = config?.siteMetadata?.title
const siteDescription = config?.siteMetadata?.description
const siteKeywords = config?.siteMetadata?.keywords

type MetaProps = JSX.IntrinsicElements['meta']
type MetaPropsArray = MetaProps[] | undefined

const meta: MetaPropsArray = [
  {
    name: 'description',
    content: siteDescription,
  } as MetaProps,
  {
    name: 'keywords',
    content: siteKeywords,
  } as MetaProps,
  {
    name: 'twitter:title',
    content: 'uullrich',
  } as MetaProps,
  {
    name: 'twitter:description',
    content: siteDescription,
  } as MetaProps,
]

const SeoWrapper = ({ children }: { children: any }) => {
  return (
    <div>
      <Helmet title={title as string} meta={meta} />
      {children}
    </div>
  )
}

export default SeoWrapper
