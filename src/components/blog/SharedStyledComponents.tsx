import styled from 'styled-components';
import media from "styled-media-query";

export const Content = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: center;
  color: ${ props => props.theme.palette.background.contrastText };
  padding-bottom: 30px;
  min-height: calc(90vh - 30px);

  h1, h2, h3, h4, h5, h6 {
    color: ${ props => props.theme.palette.background.contrastText };
    margin-top: 15px;
    margin-bottom: 0px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  max-width: 700px;
  min-width: 500px;
  gap: 2rem;
  ${media.lessThan("small")`
    padding-left: 20px;
    padding-right: 20px;
    min-width: 0;
    width: 100%;
  `};
`;