import styled from 'styled-components';
import tw from 'tailwind.macro';

export const LeftPanel = styled.div`
  // display: flex-inline;
  ${tw`w-full min-w-24 p-5 lg:p-10`};
`;

export const Contact = styled.div`
  ${tw``};
`;

export const ContactThing = styled.p`
  ${tw``};
`;

export const Image = styled.img`
  @media only screen and (max-width: 640px) {
    max-width: 30%;
  }
  ${tw`self-center mb-5 rounded-full`};
`;

export const Banner = styled.section`
  ${tw`-mt-5 border-b border-indigo-100`};
`;

export const Content = styled.div`
  ${tw`py-10`};
`;

export const Superdiv = styled.div`
  display: grid;
  gap: 10px;
  @media only screen and (min-width: 640px) {
    grid-template-columns: 35% auto;
  }
  @media only screen and (min-width: 768px) {
    grid-template-columns: 30% auto;
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 25% auto;
  }
  ${tw`max-w-screen-xl mx-auto`};
`;

export const HeaderIntro = styled.h1`
  ${tw`text-4xl`};
`;

export const SubheaderIntro = styled.h1`
  ${tw`text-xl mb-2`};
`;

export const IntroParagraph = styled.h1`
${tw`text-base mb-2`};
`;
