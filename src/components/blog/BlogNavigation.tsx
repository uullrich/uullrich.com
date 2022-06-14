import * as React from "react";
import media from "styled-media-query";
import { Link } from "gatsby";
import styled from "styled-components";
import type { PostLink } from "../../pages/blogPost";

type Props = {
  children?: React.ReactNode;
  previous: PostLink;
  next: PostLink;
};

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;

  ${media.lessThan("small")`
    flex-direction: column;
    align-items: center;
    gap: 5px;
  `};

  .gatsbyLink {
    text-shadow: none;
    background-image: none;
    color: ${(props) => props.theme.palette.primary.main};

    span {
      text-decoration: underline;
    }
  }
`;

const BlogNavigation: React.FC<Props> = ({ previous, next }) => {
  return (
    <Navigation>
      {previous && (
        <Link className="gatsbyLink" to={"../" + previous.slug}>
          {"← "}
          <span>{previous.title}</span>
        </Link>
      )}
      <div></div>
      {next && (
        <Link className="gatsbyLink" to={"../" + next.slug}>
          <span>{next.title}</span>
          {" →"}
        </Link>
      )}
    </Navigation>
  );
};

export default BlogNavigation;
