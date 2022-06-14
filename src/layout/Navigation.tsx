import * as React from "react";
import { useMemo } from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "gatsby";

type NavigationProps = {
  children?: React.ReactNode;
  isNavigationTransparent: boolean;
  isSmallLogo: boolean;
};

type NavProps = {
  isTransparent: boolean;
};

const Nav = styled.nav<NavProps>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  ${(props) =>
    props.isTransparent === true
      ? `
            color: ${props.theme.palette.navigation.transparent.contrastText};
            background-color: ${props.theme.palette.navigation.transparent.main};
        `
      : `
            background-color: ${props.theme.palette.navigation.regular.main};
            color: ${props.theme.palette.navigation.regular.contrastText};
            box-shadow: 0 5px 20px -10px #000;   
        `}
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  padding: 10px 15px 10px 50px;
`;

const NavigationList = styled.ul`
  display: flex;
  margin: 0;

  .gatsbyLink {
    text-shadow: none;
    text-decoration: none;
    background-image: none;

    &:hover {
      color: ${(props) => props.theme.palette.primary.main};
    }
  }

  .transparentNavigation {
    color: ${(props) =>
      props.theme.palette.navigation.transparent.contrastText};
  }

  .standardNavigation {
    color: ${(props) => props.theme.palette.navigation.regular.contrastText};
  }
`;

const NavlistItem = styled.li`
  margin: 0 10px;
  font-family: "Arvo", sans-serif;
  font-weight: 700;
  text-rendering: optimizeLegibility;
  padding: 0;
  list-style: none;
`;

type ImageWrapperProps = {
  isLargeLogo: boolean;
};

const ImageWrapper = styled.div<ImageWrapperProps>`
  .logo {
    position: absolute;
    left: 20px;
    top: 0px;

    ${(props) => media.lessThan("small")`
            ${
              props.isLargeLogo === true
                ? `
                height: 100px;
                width: 100px;
                transition: width 0.5s;
            `
                : ``
            };
        `};

    ${(props) => media.between("small", "medium")`
            ${
              props.isLargeLogo === true
                ? `
                height: 100px;
                width: 100px;
                transition: width 0.5s;
            `
                : ``
            };
        `};

    ${(props) => media.between("medium", "large")`
            ${
              props.isLargeLogo === true
                ? `
                height: 160px;
                width: 160px;
                transition: width 0.5s;
            `
                : ``
            };
        `};

    ${(props) => media.greaterThan("large")`
            ${
              props.isLargeLogo === true
                ? `
                height: 160px;
                width: 160px;
                transition: width 0.5s;
            `
                : ``
            };
        `};

    ${(props) =>
      props.isLargeLogo === true
        ? ``
        : `
            margin-left: 10px;
            margin-top: 10px;
            height: 40px;
            width: 40px;
            transition: width 0.5s;
        `}
  }

  .logoImg {
    ${(props) => media.lessThan("small")`
            ${
              props.isLargeLogo === true
                ? `
                height: 100px;
                width: 100px;
                transition: width 0.5s;
            `
                : ``
            };
        `};

    ${(props) => media.between("small", "medium")`
            ${
              props.isLargeLogo === true
                ? `
                height: 100px;
                width: 100px;
                transition: width 0.5s;
            `
                : ``
            };
        `};

    ${(props) => media.between("medium", "large")`
            ${
              props.isLargeLogo === true
                ? `
                height: 160px;
                width: 160px;
                transition: width 0.5s;
            `
                : ``
            };
        `};

    ${(props) => media.greaterThan("large")`
            ${
              props.isLargeLogo === true
                ? `
                height: 160px;
                width: 160px;
                transition: width 0.5s;
            `
                : ``
            };
        `};

    ${(props) =>
      props.isLargeLogo === true
        ? ``
        : `
            height: 40px;
            width: 40px;
            transition: width 0.5s;
        `}
  }
`;

const Navigation: React.FC<NavigationProps> = ({
  isNavigationTransparent,
  isSmallLogo,
}) => {
  //No reason to update childs when scrolling hooks trigger rerender
  const MemoizedNavbar = useMemo(() => {
    return (
      <Navbar>
        {
          <Link to="/">
            <ImageWrapper isLargeLogo={!isSmallLogo}>
              <StaticImage
                src="../images/icon.png"
                className="logo"
                imgClassName="logoImg"
                alt={"Logo"}
              />
            </ImageWrapper>
          </Link>
        }
        <NavigationList>
          <NavlistItem>
            {
              <Link
                className={
                  "gatsbyLink " +
                  (isNavigationTransparent
                    ? "transparentNavigation"
                    : "standardNavigation")
                }
                to="/"
              >
                About
              </Link>
            }
          </NavlistItem>
          <NavlistItem>
            {
              <Link
                className={
                  "gatsbyLink " +
                  (isNavigationTransparent
                    ? "transparentNavigation"
                    : "standardNavigation")
                }
                to="/blog"
              >
                Blog
              </Link>
            }
          </NavlistItem>
          <NavlistItem>
            {
              <Link
                className={
                  "gatsbyLink " +
                  (isNavigationTransparent
                    ? "transparentNavigation"
                    : "standardNavigation")
                }
                to="/contact"
              >
                Contact
              </Link>
            }
          </NavlistItem>
        </NavigationList>
      </Navbar>
    );
  }, [isSmallLogo, isNavigationTransparent]);

  return <Nav isTransparent={isNavigationTransparent}>{MemoizedNavbar}</Nav>;
};

export default Navigation;
