import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import CookieConsent from 'react-cookie-consent';
import media from "styled-media-query";
import CoverChevron from '../components/CoverChevron';

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

const Footer: React.FC<Props> = ({}) => {
    return (
        <>
            <FooterNavigationBar>
                <div>Hallo</div>
                <div>
                    <Link to='/legal' className='footerLink' >Legal notice</Link>
                </div>
            </FooterNavigationBar>
            <CookieConsent
                debug={true}
                location="bottom"
                buttonText="Accept"
                enableDeclineButton
                declineButtonText="Decline"
                style={{ 
                    background: '#333333',
                    boxShadow: '0 -4px 5px rgba(0,0,0,0.2)'
                }}
                buttonStyle={{
                    background: '#856ffb',
                    color: '#ffffff'
                }}
                declineButtonStyle={{
                    background: '#f3b31b',
                    color: '#ffffff'
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
