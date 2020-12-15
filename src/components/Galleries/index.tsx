import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { motion } from 'framer-motion';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import { SectionTitle, ImageSharpFluid } from 'helpers/definitions';

import * as Styled from './styles';
import Button from 'components/ui/Button';

interface Post {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      description: string;
      date: string;
      tags: string[];
      cover: {
        childImageSharp: {
          fluid: ImageSharpFluid;
        };
      };
    };
  };
}

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

function sortForDisplay(posts: Post[]) {
  let needPortraitNow = false;
  for (let i = 0; i < posts.length-1; i++) {
    let isLandscape = posts[i].node.frontmatter.cover.childImageSharp.fluid.aspectRatio > 1;
    if (!needPortraitNow && isLandscape) {
      // nothing changes, continue
      continue;
    } else if (!needPortraitNow && !isLandscape) {
      // will need a portrait one next! -> get next portrait
      let nextPortrait = -1;
      for (let j = i+1; j < posts.length; j++) {
        if (posts[j].node.frontmatter.cover.childImageSharp.fluid.aspectRatio <= 1) {
          nextPortrait = j;
          break;
        }
      }
      if (nextPortrait == -1) {
        // no more portraits -> move this one to the very back and we're done
        [posts[i], posts[posts.length-1]] = [posts[posts.length-1], posts[i]];
      } else {
        // change the next one with the next portrait
        [posts[i+1], posts[nextPortrait]] = [posts[nextPortrait], posts[i+1]];
      }
      needPortraitNow = true;
    } else if (needPortraitNow && isLandscape) {
      // need portrait, got landscape -> change!
      console.console.error('THIS SHOULD NOT HAPPEN');
    } else {
      // need portrait, got portrait - no longer need portrait
      needPortraitNow = false;
      continue;
    }
  }
}

const Galleries: React.FC = () => {
  
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "photos section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "photos" }, published: { eq: true } } }
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
              date
              tags
              cover {
                childImageSharp {
                  fluid(maxWidth: 800) {
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

  // date(formatString: "MMM YYYY")

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  let posts: Post[] = allMarkdownRemark.edges;
  shuffleArray(posts);
  sortForDisplay(posts);

  return (
    <Container section none>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />

      <Styled.Introduction>
Photography enables us to go where language cannot go, to simply experience and appreciate.
To freeze time, to eternalize a moment, to capture truth or to distort it.
Below you can see through my eyes: friends, strangers, stories, ideas.
      </Styled.Introduction>

      <Styled.NewContainer>
        {posts.map((item) => {
          const {
            id,
            fields: { slug },
            frontmatter: { title, cover, description, date, tags }
          } = item.node;
          if (cover.childImageSharp.fluid) {
            if (cover.childImageSharp.fluid.aspectRatio <= 1) {
              return (
                <Styled.NewPortImageContainer>
                    <Styled.NewImage>
                      <Img fluid={cover.childImageSharp.fluid} alt={title} />
                    </Styled.NewImage>
                </Styled.NewPortImageContainer>
              );
            } else {
              return (
                <Styled.NewImageContainer>
                    <Styled.NewImage>
                      <Img fluid={cover.childImageSharp.fluid} alt={title} />
                    </Styled.NewImage>
                </Styled.NewImageContainer>
              );
            }
          }
        })}
      </Styled.NewContainer>
    </Container>
  )

  // return (
  //   <Container section>
  //     <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />

  //     <Styled.Posts>
  //       {posts.map((item) => {
  //         const {
  //           id,
  //           fields: { slug },
  //           frontmatter: { title, cover, description, date, tags }
  //         } = item.node;

  //         return (
  //           <Styled.Post key={id}>
  //             {/* <Link to={slug}> */}
  //               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
  //                 <Styled.Card>
  //                   <Styled.Image>
  //                     <Img fluid={cover.childImageSharp.fluid} alt={title} />
  //                   </Styled.Image>
  //                   <Styled.Content>
  //                     <Styled.Date>{date}</Styled.Date>
  //                     <Styled.Title>{title}</Styled.Title>
  //                   </Styled.Content>
  //                   {/* <Styled.Tags>
  //                     {tags.map((item) => (
  //                       <Styled.Tag key={item}>{item}</Styled.Tag>
  //                     ))}
  //                   </Styled.Tags> */}
  //                 </Styled.Card>
  //               </motion.div>
  //             {/* </Link> */}
  //           </Styled.Post>
  //         );
  //       })}
  //     </Styled.Posts>
  //   </Container>
  // );
};

export default Galleries;
