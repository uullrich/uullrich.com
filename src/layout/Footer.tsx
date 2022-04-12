import * as React from 'react';
import styled from 'styled-components';
import CookieConsent from 'react-cookie-consent';

type Props = {
    children?: React.ReactNode
};

const FooterNavigationBar = styled.div`
    //background-color:#e0d8d8;
    background-color:#856ffb;
    height: 15vh;
    //box-shadow: -10px -5px 20px +10px #000;
    box-shadow: 0 -4px 5px rgba(0,0,0,0.2);
`;

const Footer: React.FC<Props> = ({}) => {
    return (
        <>
            <FooterNavigationBar>
            </FooterNavigationBar>
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                enableDeclineButton
                declineButtonText="Decline"
                cookieName="gatsby-gdpr-google-analytics">
                    This website stores cookies on your computer. These cookies are used to collect information about how you interact with this website and allow us to remember you.
                    We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors on this website.
                    <br/>
                    If you decline, your information won’t be tracked when you visit this website. A single cookie will be used in your browser to remember your preference not to be tracked.
            </CookieConsent>
        </>
    );
};

export default Footer;
