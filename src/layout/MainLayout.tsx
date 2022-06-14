import * as React from "react";
import Footer from "./Footer";
import GlobalStyle from "./GlobalStyle";
import Navigation from "./Navigation";
import SeoWrapper from "./Seo";

type Props = {
  children?: React.ReactNode;
  isNavigationTransparent: boolean;
  isSmallLogo: boolean;
};

const MainLayout: React.FC<Props> = ({
  children,
  isNavigationTransparent,
  isSmallLogo,
}) => {
  return (
    <SeoWrapper>
      <GlobalStyle />
      <Navigation
        isNavigationTransparent={isNavigationTransparent}
        isSmallLogo={isSmallLogo}
      />
      <div>{children}</div>
      <Footer />
    </SeoWrapper>
  );
};

export default MainLayout;
