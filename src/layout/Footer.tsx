import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import CookieConsent from 'react-cookie-consent';
import media from "styled-media-query";
import CoverChevron from '../components/CoverChevron';
import { useGlobalContext } from '../context/Context';
import IconGithub from '../images/social/github-brands.inline.svg';
import IconXing from '../images/social/xing-brands.inline.svg';
import IconTwitter from '../images/social/twitter-brands.inline.svg';
import IconMail from '../images/social/envelope-solid.inline.svg';
import IconCopyright from '../images/copyright-solid.inline.svg';

type Props = {
    children?: React.ReactNode
};

const FooterNavigationBar = styled.div`
    background-color:#856ffb;
    height: 10vh;
    box-shadow: 0 -4px 5px rgba(0,0,0,0.2);
    display: flex;
    justify-content: space-between;
    padding: 20px;
    color: #ffffff;
    margin-top: 30px;

    ${media.lessThan("small")`
        padding: 10px;
    `}

    .footerLink {
        text-shadow: none;
        text-decoration: none;
        background-image: none;
        color: #ffffff;
    }
`;

const Social = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    a {
        color: inherit;
        text-shadow: none;
        background-image: none;
        height: 40px;
        width: 40px;
    }

    svg {
        width: 40px;
        height: 40px;
        cursor: pointer;
        fill: #ffffff;
    }

    ${media.lessThan("small")`
        gap: 10px;

        a {
            height: 20px;
            width: 20px;
        }

        svg {
            width: 20px;
            height: 20px;
        }
    `};
`;

const Left = styled.div`
    height: 100%;
    display: flex;
    align-items: center;

    svg {
        width: 20px;
        height: 20px;
        fill: #ffffff;
    }

    ${media.lessThan("small")`
        svg {
            width: 10px;
            height: 10px;
        }

        font-size: 10pt;
    `};
`;

const Right = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const Footer: React.FC<Props> = ({}) => {
    const { changeGoogleAnalyticsCookie } = useGlobalContext();

    return (
        <>
            <FooterNavigationBar>
                <Left>
                    <IconCopyright />
                    &nbsp;Uwe Ullrich
                </Left>
                <Social>
                    <a href='https://github.com/uullrich' target="_blank" rel="noopener noreferrer"><IconGithub /></a>
                    <a href='https://twitter.com/uullrich4' target="_blank" rel="noopener noreferrer"><IconTwitter /></a>
                    <a href='https://www.xing.com/profile/Uwe_Ullrich19/cv' target="_blank" rel="noopener noreferrer"><IconXing /></a>
                    <a href={'mailto:mail@%1'.replace('%1', 'uullrich.com')} target="_blank" rel="noopener noreferrer"><IconMail /></a>
                </Social>
                <Right>
                    <Link to='/legal' className='footerLink' >Legal notice</Link>
                </Right>
            </FooterNavigationBar>
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                enableDeclineButton
                declineButtonText="Decline"
                style={{ 
                    background: '#333333',
                    boxShadow: '0 -4px 5px rgba(0,0,0,0.2)',
                }}
                buttonStyle={{
                    background: '#856ffb',
                    color: '#ffffff',
                    borderRadius: '10px'
                }}
                declineButtonStyle={{
                    background: '#f3b31b',
                    color: '#ffffff',
                    borderRadius: '10px'
                }}
                onAccept={() => {
                    changeGoogleAnalyticsCookie(true);
                }}
                onDecline={() => {
                    changeGoogleAnalyticsCookie(false);
                }}
                cookieName="gatsby-gdpr-google-analytics">
                    This website stores cookies on your computer. These cookies are used to collect information about how you interact with this website and allow us to remember you.
                    We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors on this website.
                    <br/>
                    If you decline, your information won’t be tracked when you visit this website. A single cookie will be used in your browser to remember your preference not to be tracked.
                <CoverChevron isCookieConsentOpened={true}/>
            </CookieConsent>
        </>
    );
};

export default Footer;
