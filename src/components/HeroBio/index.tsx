import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';

import ProfileImg from "../../assets/images/profile.jpg";

import * as Styled from './styles';


const HeroBio: React.FC = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "hero section" } }) {
        frontmatter {
          title
          subtitle
          content
          linkTo
          linkText
        }
      }
    }
  `);

  const frontmatter = markdownRemark.frontmatter;

  return (
    <Styled.Banner>
      <Container section>
        <Styled.Superdiv>
          <Styled.LeftPanel>
            <Styled.Image src={ProfileImg} />
          </Styled.LeftPanel>

          <Styled.Content>
            <Styled.HeaderIntro>Hi, I'm Steve!</Styled.HeaderIntro>
            <Styled.SubheaderIntro>I'm a PhD student at the University of Groningen</Styled.SubheaderIntro>
            <Styled.IntroParagraph>
              {"I am interested in complex systems, unconventional computing, human cognition and building wider artificial intelligence."}
            </Styled.IntroParagraph>
            <Styled.IntroParagraph>
              {"I am currently working as a PhD student on non-digital computing theory with the goal of exploiting physical phenomena for computation - with particular attention to neuromorphic applications."}
            </Styled.IntroParagraph>
          </Styled.Content>
        </Styled.Superdiv>
        {/* <Styled.Content>{"content"}</Styled.Content> */}
        {/* <Link to={linkTo}>
          <Button primary>{linkText}</Button>
        </Link> */}
      </Container>
    </Styled.Banner>
  );
};

export default HeroBio;
