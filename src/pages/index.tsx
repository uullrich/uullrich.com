import * as React from "react"
import styled from 'styled-components';
import Cover from "../components/Cover";
import MainLayout from "../layout/MainLayout";
import { useIsUnderCoverImage } from '../components/CoverImage';

const Dummy = styled.div`
  height: 300vh;
`;

const IndexPage = () => {
  const isUnderCoverImage = useIsUnderCoverImage(40);
  const isSmallLogo = useIsUnderCoverImage(100);

  return (
    <MainLayout 
      isNavigationTransparent={!isUnderCoverImage} 
      isSmallLogo={isSmallLogo}>
      <Cover />
      <Dummy />
    </MainLayout>
  )
}

export default IndexPage;
