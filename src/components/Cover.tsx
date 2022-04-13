import * as React from 'react';
import { useCallback, useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import CoverChevron from './CoverChevron';
import CoverImage from './CoverImage';
//import { getCookieConsentValue } from 'react-cookie-consent';

type Props = {
    children?: React.ReactNode
};

const Dimmer = styled.div`
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000;
    opacity: .2;
`;

const CoverWrapper = styled.div`
    position: relative;
`;

const Jumbo = styled.div`
    position: absolute;
    background-color: rgba(0,0,0,0.5);
    color: white;
    border-radius: 10px;

    ${media.lessThan("small")`
        left: 12%;
        top: 42%;
        width: 75%;
        height: 15%;
    `}

    ${media.between("small", "medium")`
        left: 17%;
        top: 42%;
        width: 65%;
        height: 15%;
    `}
 
    ${media.between("medium", "large")`
        left: 25%;
        top: 42%;
        width: 50%;
        height: 15%;
    `}
 
    ${media.greaterThan("large")`
        left: 25%;
        top: 40%;
        width: 50%;
        height: 20%;
    `}
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Name = styled.div`
    font-family: 'Arvo',sans-serif;
    font-size: 60px;
    font-weight: 400;
    border-bottom: 1px solid #856ffb;
    letter-spacing: 5.5px;
    text-align: center;
    margin-bottom: 10px;

    ${media.lessThan("small")`
        font-size: 25px;
        margin-bottom: 5px;
    `}

    ${media.between("small", "medium")`
        font-size: 30px;
    `}
 
    ${media.between("medium", "large")`
        font-size: 40px;
    `}
 
    ${media.greaterThan("large")`
        font-size: 60px;
    `}    
`;

const Description = styled.div`
    font-size: 16px;
    font-weight: 500;
    text-align: center;

    ${media.between("small", "medium")`
        font-size: 14px;
    `}
 
    ${media.between("medium", "large")`
        font-size: 18px;
    `}
 
    ${media.greaterThan("large")`
        font-size: 22px;
    `}
`;

const Cover: React.FC<Props> = ({}) => {
    //The useScrollPosition Hook triggers lots of rerenders
    //These compontents do not depend on scroll position change
    const MemoizedComponents = useMemo(() => {
        return (<>
        <CoverImage />
            <Jumbo>
                <div>
                    <Name>
                        Uwe Ullrich
                    </Name>
                    <Description>
                        German software enthusiast
                    </Description>
                </div>
            </Jumbo>
            <Dimmer />
        </>);
    }, []);

    //useEffect(() => {
    //    console.log('------------------>', getCookieConsentValue('gatsby-gdpr-google-analytics'));
    //}, []);

    return (
        <CoverWrapper>
            <>
            {
                MemoizedComponents
            }
            {
            //<CoverChevron />
                /*
            !isBouncingArrowHidden && (
                <ChevronWrapper onClick={onChevronClickHandler}>
                    <BouncingChevron width='100%' height='100%' />
                </ChevronWrapper>
            )
            */
            }
            </>
        </CoverWrapper>
    );
};

export default Cover;