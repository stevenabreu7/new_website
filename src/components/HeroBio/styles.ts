import styled from 'styled-components';
import tw from 'tailwind.macro';

export const LeftPanel = styled.div`
  ${tw`w-full min-w-24 py-5 sm:px-5 lg:p-10`};
`;

export const Contact = styled.div`
  @media only screen and (max-width: 639px) {
    float: left;
    margin-left: 25px;
    margin-bottom: -20px;
    padding-bottom: 0px;
  }
  ${tw``};
`;

export const ContactThing = styled.p`
  ${tw``};
`;

export const Image = styled.img`
  @media only screen and (max-width: 639px) {
    // max-width: 40%;
    // min-width: 100px;
    width: 150px;
    float: left;
  }
  ${tw`self-center mb-5 rounded-full`};
`;

export const Banner = styled.section`
  ${tw`-mt-5 border-b border-indigo-100`};
`;

export const Content = styled.div`
  @media only screen and (max-width: 639px) {
    margin-top: -50px;
  }
  ${tw`py-10 lg:mx-5`};
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
