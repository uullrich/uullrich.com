import * as React from 'react'
import useScrollPosition from '@react-hook/window-scroll'
import { useEffect, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const coverImageId = 'coverImage'
const logoSelector = '.logo'

type Props = {
  children?: React.ReactNode
}

const CoverImage: React.FC<Props> = () => {
  return (
    <StaticImage
      id={coverImageId}
      src="../images/background/cover2.JPG"
      imgStyle={{ height: '100vh', width: '100%' }}
      style={{ height: '100vh', width: '100%' }}
      alt={'Cover Image'}
    />
  )
}

export const useIsUnderCoverImage = (tolerance: number) => {
  const scrollY = useScrollPosition(5) //Throttle as parameter
  const [coverImageHeight, setCoverImageHeight] = useState(0)
  const [isUnderCoverImage, setIsUnderCoverImage] = useState(false)
  const [logoHeight, setLogoHeight] = useState(0)

  const determineHeights = () => {
    const logo = document.querySelector(logoSelector)
    if (!logo) {
      return
    }

    const coverImage = document.getElementById(coverImageId)
    if (!coverImage) {
      return
    }

    const logoRect = logo.getBoundingClientRect()
    setLogoHeight(logoHeight => {
      if (logoHeight === 0) {
        return logoRect.height
      }
      return logoHeight
    })

    const coverImageRect = coverImage.getBoundingClientRect()
    setCoverImageHeight(coverImageHeight => {
      if (coverImageHeight === 0) {
        return coverImageRect.height
      }
      return coverImageHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      setCoverImageHeight(0)
      setLogoHeight(0)
      determineHeights()
    })
    return () => window.removeEventListener('resize', determineHeights)
  }, [])

  useEffect(() => {
    determineHeights()
  }, [scrollY])

  useEffect(() => {
    if (coverImageHeight === 0 || logoHeight === 0) {
      return
    }

    setIsUnderCoverImage(scrollY > coverImageHeight - logoHeight)
  }, [coverImageHeight, scrollY, logoHeight])

  return isUnderCoverImage
}

export default CoverImage
