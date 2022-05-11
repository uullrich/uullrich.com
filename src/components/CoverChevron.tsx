import * as React from 'react';
import { useCallback, useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import useScrollPosition from '@react-hook/window-scroll';
import { useLocation } from '@reach/router';
import BouncingChevron from './icons/BouncingChevron';

type CoverChevronProps = {
    children?: React.ReactNode
    isCookieConsentOpened: boolean,
};

type ChevronWrapperProps = {
    isCookieConsentOpened: boolean,
}

const ChevronWrapper = styled.div<ChevronWrapperProps>`
    left: calc((100% - 60px) / 2);
    
    ${props => props.isCookieConsentOpened === true ? `
        position: absolute;
        top: -60px;
    `: `
        position: fixed;
        bottom: 10px;
    `};
    width: 60px;
    height: 60px;
    color: ${ props => props.theme.palette.chevron.main };
    cursor: pointer;

    &:hover{
        color: ${ props => props.theme.palette.chevron.hover };
    }

    ${(props) => media.lessThan("small")`
        left: calc((100% - 40px) / 2);
        width: 40px;
        height: 40px;
        ${ props.isCookieConsentOpened === true ? `
            top: -40px;
        ` : `` };
    `};
`;

const CoverChevron: React.FC<CoverChevronProps> = ({isCookieConsentOpened}) => {
    const [isBouncingArrowHidden, setBouncingArrowHidden] = useState(false);
    const scrollY = useScrollPosition(5); //Throttle as parameter
    const location = useLocation();

    const onChevronClickHandler = useCallback(()=>{
        if (isCookieConsentOpened === false) {
            const coverImage = document.getElementById('coverImage');
            const imageHeight = coverImage?.getBoundingClientRect().height;

            const height = imageHeight || window.innerHeight;
            window.scrollTo({ top: height - 20, behavior: 'smooth' });
            setBouncingArrowHidden(true);
        }
    }, [isCookieConsentOpened]);
  
    useEffect(() => {
        if (scrollY === 0 && isBouncingArrowHidden === true) {
            setBouncingArrowHidden(false);
        }

        if (isBouncingArrowHidden === false && isCookieConsentOpened === false && scrollY > 0) {
            setBouncingArrowHidden(true);
        }
    }, [scrollY]);

    return (
        <>
        {
            !isBouncingArrowHidden && 
            location.pathname === '/' 
            && (
                <ChevronWrapper 
                    isCookieConsentOpened={isCookieConsentOpened}
                    onClick={onChevronClickHandler}>
                    <BouncingChevron width='100%' height='100%' />
                </ChevronWrapper>)
        }
        </>
    );
};

export default CoverChevron;