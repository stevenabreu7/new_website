import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Timeline = styled.div`
  ${tw`flex flex-col w-full pb-4 -mt-4`};
  // ${tw`relative border-l border-indigo-200`};

  &:last-child {
    ${tw`pb-0`};
  }
`;

export const Image = styled.figure`
${tw`w-20 float-left px-3 pt-8 sm:pt-8 pb-4 mr-3`};
`;

export const Details = styled.div`
  ${tw`w-full`};
`;

export const Content = styled.div`
  ${tw`w-full mt-2`};
`;

export const Note = styled.p`
  ${tw`text-s italic`};
`;

export const Title = styled.div`
  ${tw`font-semibold mt-3`};
`;

export const Subtitle = styled.div`
  ${tw`text-s`};
`;

export const Location = styled.div`
  ${tw`text-s italic`};
`;

export const AwardTag = styled.p`
  display: inline;
  ${tw`text-s font-medium rounded-md`};
`;

export const AwardTagNote = styled.span`
  ${tw`font-light ml-2`}
`;

export const Date = styled.div`
  ${tw`text-xs border  border-teal-400 rounded-full px-2`};
  width: fit-content;
`;

export const Point = styled.span`
  ${tw`w-3 h-3 border border-indigo-200 bg-indigo-100 rounded-full absolute`};
  left: -6px;
  top: 20px;
`;
