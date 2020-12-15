import styled from 'styled-components';
import tw from 'tailwind.macro';

// export const Posts = styled.div`
//   ${tw`w-full flex flex-wrap`};
// `;

// export const Post = styled.div`
//   ${tw`w-full sm:w-1/2 p-3`};
// `;

// export const Card = styled.div`
//   ${tw`w-full h-full rounded-lg flex flex-col overflow-hidden border border-gray-300`};
// `;

// export const Content = styled.div`
//   ${tw`p-4 text-indigo-900`};
// `;

// export const Image = styled.figure`
//   ${tw`w-full`};
// `;

// export const Title = styled.h3`
//   display: inline !important;
//   float: left;
//   ${tw`font-semibold -mb-4`};
// `;

// export const Description = styled.p``;

// export const Date = styled.h3`
//   display: inline !important;
//   float: right;
//   ${tw`text-s text-indigo-500`};
// `;

// export const Tags = styled.div`
//   ${tw`p-4 pt-2 mt-auto`}
// `;

// export const Tag = styled.span`
//   ${tw`text-xs text-indigo-900 border border-teal-400 rounded-full px-2 py-1 mr-2`}
// `;

// NEW

export const NewContainer = styled.div`
  ${tw`w-full flex flex-wrap h-full`};
`;

export const NewImageContainer = styled.div`
  @media only screen and (max-width: 440px) {
    width: 100%;
  }
  ${tw`w-1/2 md:w-2/6 p-1`};
`;

export const NewPortImageContainer = styled.div`
  @media only screen and (max-width: 440px) {
    width: 50%;
  }
  ${tw`w-1/4 md:w-1/6 p-1`};
`;

// export const NewCard = styled.div`
//   ${tw`w-full h-full rounded-lg flex flex-col overflow-hidden border border-gray-300`};
// `;

export const NewImage = styled.figure`
  ${tw`w-full`};
`;

export const Introduction = styled.p`
  margin: 0 auto;
  ${tw`text-center w-1/2 pb-4`};
`;
