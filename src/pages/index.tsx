import * as React from 'react'
import type { HeadFC } from 'gatsby'
import Cover from '../components/Cover'
import AboutMe from '../components/AboutMe'
import MainLayout from '../layout/MainLayout'
import Seo from '../components/Seo'
import { useIsUnderCoverImage } from '../components/CoverImage'

const IndexPage = () => {
  const isUnderCoverImage = useIsUnderCoverImage(40)
  const isSmallLogo = useIsUnderCoverImage(100)

  return (
    <MainLayout
      isNavigationTransparent={!isUnderCoverImage}
      isSmallLogo={isSmallLogo}
    >
      <Cover />
      <AboutMe />
    </MainLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <Seo
    title="Uwe Ullrich – Fullstack Software Engineer"
    pathname="/"
    type="website"
  />
)
