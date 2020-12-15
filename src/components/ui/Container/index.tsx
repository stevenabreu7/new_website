import React from 'react';

import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ section, lg, none, children }) => (
  <Styled.Container section={section} lg={lg} none={none}>{children}</Styled.Container>
);

export default Container;
