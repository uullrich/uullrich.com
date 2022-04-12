import * as React from 'react';
import useScrollPosition from '@react-hook/window-scroll';
import { useEffect, useState, useMemo } from 'react';
import { StaticImage } from "gatsby-plugin-image"

const coverImageId = 'coverImage';

type Props = {
    children?: React.ReactNode
};

const CoverImage: React.FC<Props> = ({}) => {
    return <StaticImage id={coverImageId} src="../images/background/cover.JPG" imgStyle={{ height: '100vh', width: '100%' }} style={{ height: '100vh', width: '100%' }} alt={'Cover Image'}/>
};

export const useIsUnderCoverImage = (tolerance: number) => {
    const scrollY = useScrollPosition(5); //Throttle as parameter
    const [coverImageHeight, setCoverImagegHeight] = useState(0);
    const [isUnderCoverImage, setIsUnderCoverImage] = useState(false);
  
    useEffect(() => {
        if (coverImageHeight === 0) {
            let imageHeight = null;
            const coverImage = document.querySelector('#' + coverImageId);
            if (coverImage !== null) {
              const boundingRect = coverImage.getBoundingClientRect();
              if (boundingRect) {
                imageHeight = boundingRect.height;
                setCoverImagegHeight(imageHeight);
              }
            }
            if (imageHeight !== null) setIsUnderCoverImage(scrollY > imageHeight - tolerance);
        } else {
            if ((scrollY > coverImageHeight - tolerance) !== isUnderCoverImage) {
                setIsUnderCoverImage(scrollY > coverImageHeight - tolerance);
            }
        }
    }, [scrollY]);

    return isUnderCoverImage;
}

export default CoverImage;