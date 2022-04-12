import * as React from "react"
import styled from 'styled-components';
import Cover from "../components/Cover";
import BouncingChevron from "../components/icons/BouncingChevron";
//<BouncingChevron width="60px" height="60px" />
import MainLayout from "../layout/MainLayout";

const Dummy = styled.div`
  //background-color: #ffffff;
  height: 300vh;
`;

const IndexPage = () => {
  return (
    <MainLayout>
      <Cover />
      <Dummy />
    </MainLayout>
  )
}

export default IndexPage
