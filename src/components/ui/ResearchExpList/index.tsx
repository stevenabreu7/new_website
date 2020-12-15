import FormatHtml from 'components/utils/FormatHtml';
import { ImageSharpFluid } from 'helpers/definitions';
import React from 'react';
import Img from 'gatsby-image';

import * as Styled from './styles';
import Icon from '../Icon';

interface ExperienceProps {
  html: string;
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
}

const ResearchExpList: React.FC<ExperienceProps> = (props) => (
  <Styled.Timeline>
    {/* <Styled.Point /> */}
    <Styled.Details>
      <Styled.Image>
        <Img fluid={props.logo.childImageSharp.fluid} alt="" />
      </Styled.Image>
      <Styled.Date>
        {props.start_date} - {props.end_date}
      </Styled.Date>
      <Styled.Title>{props.title}</Styled.Title>
      <Styled.Subtitle> 
        {props.group} @ {props.institution} (<a href={props.url} target="_blank">link</a>)
      </Styled.Subtitle>
      <Styled.Location>
        {props.location}
      </Styled.Location>
    </Styled.Details>
    <Styled.Content>
      {props.description}
      <FormatHtml content={props.html} />
    </Styled.Content>
  </Styled.Timeline>
);

export default ResearchExpList;
