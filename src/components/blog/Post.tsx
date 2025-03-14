import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'

import 'prismjs/components/prism-css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cpp'
import 'prismjs/components/prism-cmake'
import 'prismjs/components/prism-qml'
import 'prismjs/components/prism-abap'

import * as React from 'react'
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { Frontmatter } from '../../pages/blog'

type Props = {
  children?: React.ReactNode
  frontmatter: Frontmatter
}

const PostWrapper = styled.div`
  ${props => `
  background-color: ${props.theme.palette.card.main};
  color: ${props.theme.palette.card.contrastText};
  border-radius: ${props.theme.borderRadiusNormal};
  padding: 10px;
`}
`

const Metadata = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 14px;
  margin-top: 3px;
  margin-bottom: 5px;
`

const Line = styled.hr`
  margin-top: 10px;
  background-color: ${props => props.theme.palette.separator};
  margin-bottom: 0px;
`

const PostComponent: React.FC<Props> = ({ children, frontmatter }) => {
  React.useEffect(() => {
    Prism.highlightAll()
  }, [])

  if (!children) {
    return <></>
  }

  return (
    <PostWrapper>
      <h1>{frontmatter?.title}</h1>
      <Metadata>{frontmatter?.date + ' - ' + frontmatter?.author}</Metadata>
      <Line />
      <MDXProvider>{children}</MDXProvider>
    </PostWrapper>
  )
}

export default PostComponent
