import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import { StaticImage } from "gatsby-plugin-image"
import IconGithub from '../images/social/github-brands.inline.svg';

const Wrapper = styled.div`
  h1, h2, h3, h4, h5, h6 {
      margin-top: 10px;
      margin-bottom: 5px;
  }
`;

const Buzz = styled.div`
  background-color: rgb(133, 111, 251, 0.7);
  width: fit-content; 
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 8px;
  padding-top: 3px;
  padding-bottom: 3px;
  cursor: pointer;
  user-select: none;

  &:hover {
      background-color: rgb(133, 111, 251, 1);
  }

  float: left;
  margin-right: 15px;
  margin-bottom: 15px;
`;

const Lane = styled.div`
  clear: both;
  width: 100%;
`;

const Details = styled.div<{ isOpen:boolean }>`
  position: relative;
  clear: both;
  margin-bottom: 20px;
  transition: height 0.5s;
  ${ props => props.isOpen === true ? `
    height: 100px;
  ` : `
    height: 0px;
    overflow: hidden;
  ` };
`;

const GithubWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  a {
    color: inherit;
    text-shadow: none;
    background-image: none;
    height: 40px;
    width: 40px;
  }

  svg {
    width: 40px;
    height: 40px;
    cursor: pointer;
    fill: #ffffff;
  }
`;

const DelayedVisibility = styled.div<{isVisible: boolean}>` 
  @keyframes delayedShow {
    to {
      visibility: visible;
    }
  }
  visibility: hidden;

  ${ props => props.isVisible === true ? `
    animation: 0s linear 0.5s forwards delayedShow;
  ` : ``};
`;

const DetailExplanation = styled.div`
  width: calc(100% - 40px);
`;

type Buzzword = {
  title: String,
  githubLink?: string,
  explanation: String,
}

type Category = {
  title: String,
  buzzwords: Buzzword[],
}

type Content = {
  categories: Category[]
}

type Detail = {
  isExpanded: boolean,
  category?: Category,
  buzzword?: Buzzword,
}

type Props = {
  children?: React.ReactNode,
  content: Content
};

const BuzzwordBingo: React.FC<Props> = ({ content }) => {

  const [detail, setDetail] = useState<Detail>({
    isExpanded: false
  });

  return (
    <Wrapper>
      About my favorite libraries.
      {
        content.categories.map((category, i) => {
          return (
            <React.Fragment key={i}>
              <Lane key={i}>
                <h4>{category.title}</h4>
                {
                  category.buzzwords.map((buzzword, j) => {
                    return <Buzz key={j} onClick={() => {
                      setDetail({
                        isExpanded: true,
                        category,
                        buzzword
                      } as Detail)
                    }}>{buzzword.title}</Buzz>
                  })
                }
              </Lane>
              {                
                <Details key={'detail' + i} isOpen={detail?.isExpanded && detail?.category?.title === category?.title}>                  
                  <DelayedVisibility isVisible={detail?.isExpanded && detail?.category?.title === category?.title}>
                    <DetailExplanation>
                    {
                      detail?.buzzword?.explanation                            
                    }
                    </DetailExplanation>  
                    <GithubWrapper>
                      <a href={detail?.buzzword?.githubLink} target="_blank" rel="noopener noreferrer"><IconGithub /></a>
                    </GithubWrapper>
                  </DelayedVisibility>         
                </Details>
              }
            </React.Fragment>
          )
        })
      }

    </Wrapper>
  );
};

export default BuzzwordBingo;

export const queryToContent = (data: any) => {
  const content: Content = {
    categories: []
  }

  data?.allBuzzwordsJson?.edges.map(({ node }) => {
    const category: Category = {
      title: node.title,
      buzzwords: []
    };

    node?.buzzwords.map((buzzword: any) => {
      const buz: Buzzword = {
        title: buzzword.title,
        explanation: buzzword.explanation,
        githubLink: buzzword.githubLink,
      }

      category.buzzwords.push(buz);
    });

    content.categories.push(category);
  });

  return content;
}