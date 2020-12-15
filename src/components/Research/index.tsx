// from HeroBio
import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { SectionTitle, ImageSharpFluid } from 'helpers/definitions';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import ResearchList from 'components/ui/ResearchList';

import * as Styled from './styles';
import FormatHtml from 'components/utils/FormatHtml';
import ResearchExpList from 'components/ui/ResearchExpList';

interface Experience {
  node: {
    id: string;
    html: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      location: string;
      institution: string;
      group: string;
      title: string;
      start_date: string;
      end_date: string;
      description: string;
      url: string;
      logo: {
        childImageSharp: {
          fluid: ImageSharpFluid;
        };
      };
    };
  };
}

interface Publication {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      category: string;
      description: string;
      institution: string;
      authors: string;
      date: string;
      venue: string;
      paperurl: string;
      award: string;
      abstract: string;
      logo: {
        childImageSharp: {
          fluid: ImageSharpFluid;
        };
      };
    };
  };
}

const Research: React.FC = () => {
  let { markdownRemark, publicationRemark, experienceRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "research section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      publicationRemark: allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "research publication" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            html
            fields {
              slug
            }
            frontmatter {
              title
              description
              institution
              authors
              date(formatString: "MMM YYYY")
              venue
              paperurl
              award
              abstract
              logo {
                childImageSharp {
                  fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      experienceRemark: allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "research experience" } } }
        sort: { fields: frontmatter___institution, order: DESC }
      ) {
        edges {
          node {
            id
            html
            fields {
              slug
            }
            frontmatter {
              category
              location
              institution
              group
              title
              start_date
              end_date
              url
              description
              logo {
                childImageSharp {
                  fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const publications: Publication[] = publicationRemark.edges;
  const experiences: Experience[] = experienceRemark.edges;

  return (
    // <Styled.Banner>
      <Container section>
        <Styled.ThisContainer>
          <TitleSection center={true} title={sectionTitle.title} subtitle={sectionTitle.subtitle} />

          <TitleSection title="" subtitle="Publications" />
            {publications.map((item) => {
              let pub = item.node.frontmatter;
              return (
                <ResearchList {...pub} />
              );
            })}
        
          <TitleSection title="" subtitle="Research Experience" />
          {experiences.map((item) => {
              let exp = item.node.frontmatter;
              exp.html = item.node.html;
              return (
                <ResearchExpList {...exp} />
              );
          })}
        </Styled.ThisContainer>
      </Container>
    // </Styled.Banner>
  );
};

export default Research;
