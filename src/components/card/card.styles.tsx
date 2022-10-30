import styled from "styled-components";
import {
  themedGradientBackgroundColor,
  themedBoxShadow,
  themedGradientBackgroundColor2,
  themedButtonTextColor2,
  themedStaticPrimaryColor,
  themedBackgroundColor,
} from "../theme-provider/theme-provider.styles";

interface ICard {
  readonly bgGradientOnHover: boolean;
  readonly padding: string;
  readonly animateOnHover: boolean;
  readonly raw: boolean;
}

export const StyledCardContent = styled.div``;

export const StyledCardBase = styled.div<ICard>`
  border-radius: 10px;
  padding: ${({ padding }) => padding};
  background: ${({ raw }) =>
    raw ? themedBackgroundColor : themedGradientBackgroundColor};
  transition: transform 0.5s ease-in-out;
  svg {
    fill: ${themedStaticPrimaryColor};
  }
  &:hover {
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
    svg {
      fill: ${({ bgGradientOnHover }) => bgGradientOnHover && `#FFF`};
    }
    a,
    button {
      background: ${({ bgGradientOnHover }) => bgGradientOnHover && `#fff`};
      box-shadow: ${({ bgGradientOnHover }) => bgGradientOnHover && `none`};
      &:hover {
        color: ${({ bgGradientOnHover }) =>
          bgGradientOnHover && themedStaticPrimaryColor};
      }
    }
    img {
      background: #fff;
    }
    &:before {
      opacity: 1;
    }
  }

  position: relative;
  z-index: 1;
  overflow: hidden;

  ${({ animateOnHover }) =>
    animateOnHover &&
    `${StyledCardContent} {
      transition: transform 0.5s ease-in-out;
      transform: translateY(10px);
    }
  `}
  ${({ animateOnHover }) =>
    animateOnHover &&
    `&:hover ${StyledCardContent} {
      transform: translateY(0);
    }
    
  `}

  //GRADIENT HOVER STYLE bgGradientOnHover: true
    &:before {
    transition: opacity 0.5s ease-in-out;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    background: ${({ bgGradientOnHover }) =>
      bgGradientOnHover && themedGradientBackgroundColor2};
    z-index: -1;
  }
`;

export const StyledCardWithShadow = styled(StyledCardBase)`
  box-shadow: ${themedBoxShadow};
`;
