import FormatHtml from 'components/utils/FormatHtml';
import { ImageSharpFluid } from 'helpers/definitions';
import React from 'react';
import Img from 'gatsby-image';

import * as Styled from './styles';
import Icon from '../Icon';

interface PublicationProps {
      category: string;
      title: string;
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
}

const ResearchList: React.FC<PublicationProps> = (props) => (
  <Styled.Timeline>
    {/* <Styled.Point /> */}
    <Styled.Details>
      {/* <Styled.Image>
        <Img fluid={props.logo.childImageSharp.fluid} alt="" />
      </Styled.Image> */}
      <Styled.Title>{props.title}</Styled.Title>
      {(() => {
        if (props.award !== '') {
          return (
          <Styled.AwardTag>
            <Icon icon={["fa", "trophy"]} style={{color:"#000000", width:"15px", marginRight:"5px"}} />
            {props.award.split('(')[0].trim()} 
            <Styled.AwardTagNote>({props.award.split('(')[1].trim()}</Styled.AwardTagNote>
          </Styled.AwardTag>
          )
        }
      })()}
      <Styled.Subtitle> 
        <FormatHtml content={props.authors.replace('Steven Abreu', '<i>Steven Abreu</i>')} />
      </Styled.Subtitle>
      <Styled.Location>{props.venue} (<a href={props.paperurl} target="_blank">link</a>)</Styled.Location>
    </Styled.Details>
    <Styled.Content>
      {props.abstract}
      {/* {props.abstract.slice(0, props.abstract.indexOf('. ', 200)) + '...'} */}
    </Styled.Content>
  </Styled.Timeline>
);

export default ResearchList;
