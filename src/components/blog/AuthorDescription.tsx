import * as React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import { StaticImage } from "gatsby-plugin-image"

type Props = {
  children?: React.ReactNode,
  enableBackground: boolean,
};

type WrapperProps = {
  withBackground: boolean,
}

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .outerWrapper {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .img {
    width: 100px;
    height: 100px;
  }

  ${props => 
    props.withBackground === true ? `
      background-color: rgba(0,0,0,0.5);
      color: white;
      border-radius: 10px;
      padding: 10px;
    ` : ``
  };

  ${(props) => media.lessThan("small")`
    ${props.withBackground === true ? `
      padding: 0 0 0 10px;
    `: ``};
  `};
`;

const Description = styled.div`
  width: calc(100% - 100px);
  padding: 10px;
`;

const AuthorDescription: React.FC<Props> = ({ enableBackground }) => {
  return (
    <Wrapper withBackground={enableBackground}>                        
      <StaticImage 
        id='me'
        src="../../images/me.jpg" 
        className='outerWrapper'
        imgClassName='img'
        alt={'Image from Uwe Ullrich'} />
      <Description>
        Content by <strong>Uwe Ullrich</strong> who lives and works in Kirchheim unter Teck. Sometimes I try new things and want to share this in public.
      </Description>
    </Wrapper>
  );
};

export default AuthorDescription;