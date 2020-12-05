import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import TitleSection from 'components/ui/TitleSection';
import Container from 'components/ui/Container';
import Banner from 'components/ui/Banner';

import { SectionTitle } from 'helpers/definitions';

interface SectionHeroBanner extends SectionTitle {
  content: string;
  linkTo: string;
  linkText: string;
}

const HeroBanner: React.FC = () => {
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

  const heroBanner: SectionHeroBanner = markdownRemark.frontmatter;

  return (
    <Container section>
      <TitleSection title={"Work in progress"} subtitle={"This website is still under construction!"} />
    </Container>
    // <Banner
    //   title={heroBanner.title}
    //   subtitle={heroBanner.subtitle}
    //   content={heroBanner.content}
    //   linkTo={heroBanner.linkTo}
    //   linkText={heroBanner.linkText}
    // />
  );
};

export default HeroBanner;
