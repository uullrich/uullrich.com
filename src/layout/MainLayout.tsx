import * as React from 'react'
import Footer from './Footer'
import GlobalStyle from './GlobalStyle'
import Navigation from './Navigation'

type Props = {
  children?: React.ReactNode
  isNavigationTransparent: boolean
  isSmallLogo: boolean
}

const MainLayout: React.FC<Props> = ({
  children,
  isNavigationTransparent,
  isSmallLogo,
}) => {
  return (
    <>
      <GlobalStyle />
      <Navigation
        isNavigationTransparent={isNavigationTransparent}
        isSmallLogo={isSmallLogo}
      />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default MainLayout
