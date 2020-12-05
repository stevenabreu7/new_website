import React from 'react';

import Icon, { IconProps } from 'components/ui/Icon';

import * as Styled from './styles';

interface Props {
  icon: IconProps;
  text: string;
  link?: string;
}

const BioItem: React.FC<Props> = ({ icon, text, link }) => (
  <Styled.ContactThing>
    <Styled.Link href={link}>
      <Icon icon={icon} style={{color:"#000000", width:"15px", marginRight:"5px"}} />
      {text}
    </Styled.Link>
  </Styled.ContactThing>
);

export default BioItem;
