import * as React from 'react'
import { useCallback, useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import useScrollPosition from '@react-hook/window-scroll'
import { useLocation } from '@reach/router'
import BouncingChevron from './icons/BouncingChevron'

type CoverChevronProps = {
  isCookieConsentOpened: boolean
}

const getChevronPosition = (isCookieConsentOpened: boolean) => css`
  ${isCookieConsentOpened
    ? `
      position: absolute;
      top: -60px;
    `
    : `
      position: fixed;
      bottom: 10px;
    `}
`

const ChevronWrapper = styled.div<{ $isCookieConsentOpened: boolean }>`
  left: calc((100% - 60px) / 2);
  width: 60px;
  height: 60px;
  color: ${props => props.theme.palette.chevron.main};
  cursor: pointer;

  ${props => getChevronPosition(props.$isCookieConsentOpened)}

  &:hover {
    color: ${props => props.theme.palette.chevron.hover};
  }

  ${media.lessThan('small')`
    left: calc((100% - 40px) / 2);
    width: 40px;
    height: 40px;
    ${(props: { $isCookieConsentOpened: boolean }) => (props.$isCookieConsentOpened ? `top: -40px;` : ``)}
  `}
`

const CoverChevron: React.FC<CoverChevronProps> = ({
  isCookieConsentOpened,
}) => {
  const [isBouncingArrowHidden, setBouncingArrowHidden] = useState(false)
  const scrollY = useScrollPosition(5) // Throttle as parameter
  const location = useLocation()

  const onChevronClickHandler = useCallback(() => {
    if (!isCookieConsentOpened) {
      const coverImage = document.getElementById('coverImage')
      const imageHeight =
        coverImage?.getBoundingClientRect().height || window.innerHeight
      window.scrollTo({ top: imageHeight - 20, behavior: 'smooth' })
      setBouncingArrowHidden(true)
    }
  }, [isCookieConsentOpened])

  useEffect(() => {
    if (scrollY === 0 && isBouncingArrowHidden) {
      setBouncingArrowHidden(false)
    }
    if (!isBouncingArrowHidden && !isCookieConsentOpened && scrollY > 0) {
      setBouncingArrowHidden(true)
    }
  }, [scrollY, isBouncingArrowHidden, isCookieConsentOpened])

  if (isBouncingArrowHidden || location.pathname !== '/') {
    return <></>
  }

  return (
    <ChevronWrapper
      $isCookieConsentOpened={isCookieConsentOpened}
      onClick={onChevronClickHandler}
    >
      <BouncingChevron width="100%" height="100%" />
    </ChevronWrapper>
  )
}

export default CoverChevron
