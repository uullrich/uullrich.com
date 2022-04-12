import * as React from 'react';
import { useMemo } from 'react';
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import { useIsUnderCoverImage } from '../components/CoverImage';

type Props = {
    children?: React.ReactNode
};

type NavProps = {
    isTransparent: boolean
}

const Nav = styled.nav<NavProps>`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    ${props => 
        props.isTransparent === true ? '' : `
            //background-color: #e0d8d8;
            background-color: #333333;
            color: #ffffff;
            box-shadow: 0 5px 20px -10px #000;   
        `
    }
`;

const Navbar = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 60px;
    padding: 10px 15px 10px 50px;
`;

const NavigationList = styled.ul`
    display: flex;
    margin: 0;
`;

const NavlistItem = styled.li`
    margin: 0 10px;
    font-family: 'Arvo',sans-serif;
    font-weight: 700;
    text-rendering: optimizeLegibility;
    padding: 0;
    list-style: none;
`;

type ImageWrapperProps = {
    isLargeLogo: boolean,
}

const ImageWrapper = styled.div<ImageWrapperProps>`
    .logo {
        position: absolute;
        left: 20px;
        top: 0px;

        ${props => props.isLargeLogo === true ? `
            height: 160px;
            width: 160px;
            transition: width 0.5s;
        `: `
            margin-left: 25px;
            margin-top: 10px;
            height: 40px;
            width: 40px;
            transition: width 0.5s;
        `
        }
    }

    .logoImg {
        ${props => props.isLargeLogo === true ? `
            height: 160px;
            width: 160px;
            transition: width 0.5s;
        `: `
            height: 40px;
            width: 40px;
            transition: width 0.5s;
        `
        }
    }
`;

const Navigation: React.FC<Props> = ({}) => {
    const isUnderCoverImage = useIsUnderCoverImage(40);
    const isSmallLogo = useIsUnderCoverImage(100);
    
    //No reason to update childs when scrolling hooks trigger rerender
    const MemoizedNavbar = useMemo(() => {
        return (
            <Navbar>                
                {
                    <ImageWrapper isLargeLogo={!isSmallLogo}>
                        <StaticImage 
                            src="../images/icon.png" 
                            className='logo'
                            imgClassName='logoImg'
                            alt={'Logo'}/>
                    </ImageWrapper>
                }
                <NavigationList>
                    <NavlistItem>Home</NavlistItem>
                    <NavlistItem>Blog</NavlistItem>
                </NavigationList>
            </Navbar>
        )
    }, [isSmallLogo]);

    return (
        <Nav isTransparent={!isUnderCoverImage}>
            {MemoizedNavbar}
        </Nav>
    );
};

export default Navigation;