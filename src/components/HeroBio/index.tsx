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
              <BioItem icon={["fa", "envelope"]} text={"email"} link={"mailto:stevenabreu7@gmail.com"} />
              <BioItem icon={["fab", "linkedin"]} text={"linkedin"} link={"http://linkedin.com/in/stevenabreu7"} />
              <BioItem icon={["fab", "github"]} text={"github"} link={"http://github.com/stevenabreu7"} />
              <BioItem icon={["fa", "paper-plane"]} text={"telegram"} link={"https://telegram.me/stevenabreu7"} />
              {/* <BioItem icon={["fab", "instagram"]} text={"instagram"} link={"http://instagram.com/stevenabreu7"} /> */}
            </Styled.Contact>
          </Styled.LeftPanel>

          <Styled.Content>
            {/* <Styled.HeaderIntro>About</Styled.HeaderIntro> */}
            <Styled.SubheaderIntro>PhD student at the University of Groningen</Styled.SubheaderIntro>
            <Styled.IntroParagraph>
              I am interested in interdisciplinary research in and around computer science and artificial intelligence: unconventional nature-inspired computing, understanding the human mind, and building wider artificial intelligence.
            </Styled.IntroParagraph>
            <Styled.IntroParagraph>
              Currently working as a PhD student on non-digital computing theory with the goal of exploiting physical phenomena for computation - focused on neuromorphic hardware in particular. I joined the <a target="_blank" href="https://www.ai.rug.nl/minds/">MINDS</a> research group, funded through the European Commission's <a target="_blank" href="http://postdigital.astonphotonics.uk">post-digital</a> project.
            </Styled.IntroParagraph>
            <Styled.IntroParagraph>
              In my free time, I am a hobby photographer, like to read, travel, go to music and art events, and occasionally write about topics I care about.
            </Styled.IntroParagraph>
            <Styled.IntroParagraph>
              <i>
                {"This website is still under construction..."}
              </i>
            </Styled.IntroParagraph>
          </Styled.Content>
        </Styled.Superdiv>
      </Container>
    </Styled.Banner>
  );
};

export default HeroBio;
