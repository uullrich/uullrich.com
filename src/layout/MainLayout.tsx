import * as React from 'react';
import Footer from './Footer';
import GlobalStyle from './GlobalStyle';
import Navigation from './Navigation';
import SeoWrapper from './Seo';

type Props = {
    children?: React.ReactNode
};

const MainLayout: React.FC<Props> = ({children}) => {
    return (
        <SeoWrapper>
            <GlobalStyle />
            <Navigation />
            <div>
                {children}
            </div>
            <Footer />
        </SeoWrapper>
    );
};

export default MainLayout;
