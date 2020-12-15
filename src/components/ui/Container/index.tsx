import React from 'react';

import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ section, lg, children }) => (
  <Styled.Container section={section} lg={lg}>{children}</Styled.Container>
);

export default Container;
