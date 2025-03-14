import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import IconGithub from '../images/social/github-brands.inline.svg'
import useFetchBuzzwordCollection, {
  Buzzword,
  Category,
} from '../hooks/useFetchBuzzwords'

const Wrapper = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 10px;
    margin-bottom: 5px;
  }
`

const Buzz = styled.div<{ $isSelected: boolean }>`
  ${props =>
    props.$isSelected === true
      ? `
    background-color: ${props.theme.palette.buzzword.selected.main};
    color: ${props.theme.palette.buzzword.selected.contrastText};
  `
      : `
    background-color: ${props.theme.palette.buzzword.unselected.main};
    color: ${props.theme.palette.buzzword.unselected.contrastText};
  `}

  width: fit-content;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 8px;
  padding-top: 3px;
  padding-bottom: 3px;
  cursor: pointer;
  user-select: none;

  &:hover {
    ${props => `
      background-color: ${props.theme.palette.buzzword.hover.main};
      color: ${props.theme.palette.buzzword.hover.contrastText};
    `}
  }

  float: left;
  margin-right: 15px;
  margin-bottom: 15px;
`

const BuzzCategory = styled.div`
  h4 {
    color: ${props => props.theme.palette.background.contrastText};
  }
`

const Lane = styled.div`
  clear: both;
  width: 100%;
`

const Details = styled.div<{ $isOpen: boolean }>`
  position: relative;
  clear: both;
  margin-bottom: 20px;
  transition: height 0.5s;

  ${props => media.lessThan('small')`
    ${
      props.$isOpen === true
        ? `
      height: 220px;
    `
        : `
      height: 0px;
      overflow: hidden;
    `
    };
  `};

  ${props =>
    props.$isOpen === true
      ? `
    height: 150px;
  `
      : `
    height: 0px;
    overflow: hidden;
  `};
`

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
    fill: ${props => props.theme.palette.buzzword.githubFill};
  }
`

const DelayedVisibility = styled.div<{ $isVisible: boolean }>`
  @keyframes delayedShow {
    to {
      visibility: visible;
    }
  }
  visibility: hidden;

  ${props =>
    props.$isVisible === true
      ? `
    animation: 0s linear 0.4s forwards delayedShow;
  `
      : ``};
`

const DetailExplanation = styled.div`
  width: calc(100% - 45px);
  padding-right: 5px;
`

type Props = {
  children?: React.ReactNode
}

type Detail = {
  isExpanded: boolean
  category?: Category
  buzzword?: Buzzword
}

const BuzzwordBingo: React.FC<Props> = () => {
  const buzzwordCollection = useFetchBuzzwordCollection()
  const [detail, setDetail] = useState<Detail>({
    isExpanded: false,
  })

  return (
    <Wrapper>
      About my favorite libraries.
      {buzzwordCollection.categories.map((category: Category, i: number) => {
        return (
          <React.Fragment key={i}>
            <Lane key={i}>
              <BuzzCategory>
                <h4>{category.title}</h4>
              </BuzzCategory>
              {category.buzzwords.map((buzzword, j) => {
                return (
                  <Buzz
                    key={j}
                    $isSelected={
                      buzzword.title === detail?.buzzword?.title &&
                      detail?.category?.title === category?.title
                    }
                    onClick={() => {
                      setDetail({
                        isExpanded: true,
                        category,
                        buzzword,
                      } as Detail)
                    }}
                  >
                    {buzzword.title}
                  </Buzz>
                )
              })}
            </Lane>
            {
              <Details
                key={'detail' + i}
                $isOpen={
                  detail?.isExpanded &&
                  detail?.category?.title === category?.title
                }
              >
                <DelayedVisibility
                  $isVisible={
                    detail?.isExpanded &&
                    detail?.category?.title === category?.title
                  }
                >
                  <DetailExplanation>
                    {detail?.buzzword?.explanation}
                  </DetailExplanation>
                  <GithubWrapper>
                    <a
                      href={detail?.buzzword?.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconGithub />
                    </a>
                  </GithubWrapper>
                </DelayedVisibility>
              </Details>
            }
          </React.Fragment>
        )
      })}
    </Wrapper>
  )
}

export default BuzzwordBingo
