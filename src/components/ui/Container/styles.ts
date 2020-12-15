import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface StyledProps {
  section?: boolean;
  lg?: boolean;
}

export const Container = styled.div<StyledProps>`
  ${tw`flex flex-wrap w-full mx-auto p-5`};
  ${({ lg }) => !lg && tw`max-w-screen-xl`};
  ${({ lg }) => lg && tw`max-w-screen-lg`};
  ${({ section }) => section && tw`py-8 sm:py-16`};
`;
