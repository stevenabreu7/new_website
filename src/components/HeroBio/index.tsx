import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import BioItem from 'components/ui/BioItem';
import Container from 'components/ui/Container';

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
            <Styled.Contact>
              <BioItem icon={["fa", "map-marker-alt"]} text={"groningen, nl"} />
              <BioItem icon={["fa", "paper-plane"]} text={"email"} link={"mailto:stevenabreu7@gmail.com"} />
              <BioItem icon={["fab", "linkedin"]} text={"linkedin"} link={"http://linkedin.com/in/stevenabreu7"} />
              <BioItem icon={["fab", "github"]} text={"github"} link={"http://github.com/stevenabreu7"} />
              <BioItem icon={["fab", "instagram"]} text={"instagram"} link={"http://instagram.com/stevenabreu7"} />
            </Styled.Contact>
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
            <Styled.IntroParagraph>
              <i>
                {"This website is still under construction, check back soon.."}
              </i>
            </Styled.IntroParagraph>
          </Styled.Content>
        </Styled.Superdiv>
      </Container>
    </Styled.Banner>
  );
};

export default HeroBio;
