import styled from 'styled-components';
import tw from 'tailwind.macro';

export const LeftPanel = styled.div`
  ${tw`flex-initial w-1/2 sm:w-1/3 mr-4 md:mr-12`};
`;

export const Image = styled.img`
  ${tw`self-center rounded-full`};
`;

export const Banner = styled.section`
  ${tw`border-b border-indigo-100`};
`;

export const Content = styled.div`
  ${tw`flex-initial`};
`;

export const Superdiv = styled.div`
  ${tw`flex mx-5`};
`;

export const HeaderIntro = styled.h1`
  ${tw`text-4xl`};
`;

export const SubheaderIntro = styled.h1`
  ${tw`text-xl mb-2`};
`;

export const IntroParagraph = styled.h1`
${tw`text-base`};
`;
