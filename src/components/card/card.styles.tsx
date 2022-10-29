import styled from "styled-components";
import {
  themedGradientBackgroundColor,
  themedBoxShadow,
  themedGradientBackgroundColor2,
  themedButtonTextColor2,
  themedStaticPrimaryColor,
} from "../theme-provider/theme-provider.styles";

interface ICard {
  readonly bgGradientOnHover: boolean;
}

export const StyledCardContent = styled.div`
  transition: transform 0.3s ease-in;
  transform: translateY(10px);
`;

// const handleGradientHover = (bgGradientOnHover: boolean) => {
//   if (bgGradientOnHover) {
//     return `&:hover {
//       background: ${themedGradientBackgroundColor2} !important;
//       h1,
//       h2,
//       h3,
//       h4,
//       h5,
//       h6,
//       p,
//       li {
//         color: ${themedButtonTextColor2};
//       }
//     }`;
//   }
// };
export const StyledCardBase = styled.div<ICard>`
  border-radius: 10px;
  padding: 35px 50px 50px 50px;
  //background: linear-gradient(165deg, #fff 50%, #edebeb 80%);
  background: ${({ color }) => (color ? color : themedGradientBackgroundColor)};
  &:hover {
    background: ${({ bgGradientOnHover }) =>
      bgGradientOnHover && themedGradientBackgroundColor2};
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    li {
      color: ${({ bgGradientOnHover }) => bgGradientOnHover && `#FFF`};
    }
    a,
    button {
      background: #fff;
      box-shadow: none;
      &:hover {
        color: ${({ bgGradientOnHover }) =>
          bgGradientOnHover && themedStaticPrimaryColor};
      }
    }
    img {
      background: #fff;
    }
  }

  position: relative;
  overflow: hidden;
  // &:before {
  //   content: "";
  //   position: absolute;
  //   transition: opacity 0.3s ease-in;
  //   width: 100%;
  //   height: 100%;
  //   border-radius: 10px;
  //   top: 0;
  //   left: 0;
  //   background: linear-gradient(165deg, #fff 0%, #fafafa 50%);
  //   opacity: 0;
  //   z-index: 0;
  // }
  &:hover ${StyledCardContent} {
    transform: translateY(0);
  }
`;

export const StyledCardWithShadow = styled(StyledCardBase)`
  box-shadow: ${themedBoxShadow};
`;
