import styled from "styled-components";

interface ICard {
  readonly bgGradientOnHover: boolean;
  readonly padding: string;
  readonly animateOnHover: boolean;
  readonly raw: boolean;
}

export const StyledCardContent = styled.div``;

export const StyledCardBase = styled.div<ICard>(
  ({ theme, padding, raw, bgGradientOnHover, animateOnHover }) => `
  border-radius: 10px;
  padding: ${padding && padding};
  background: ${raw ? theme.backgroundColor : theme.backgroundColorGradient};
  transition: transform 0.5s ease-in-out;
  svg {
    fill: ${theme.colorPrimary};
  }
  &:hover {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    span,
    li {
      color: ${bgGradientOnHover && `#FFF`};
    }
    svg {
      fill: ${bgGradientOnHover && `#FFF`};
    }
    a,
    button {
      background: ${bgGradientOnHover && `#fff`};
      box-shadow: ${bgGradientOnHover && `none`};
      &:hover {
        color: ${bgGradientOnHover && theme.colorPrimary};
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

  ${
    animateOnHover &&
    `${StyledCardContent} {
      transition: transform 0.5s ease-in-out;
      transform: translateY(10px);
    }
  `
  }
  ${
    animateOnHover &&
    `&:hover ${StyledCardContent} {
      transform: translateY(0);
    }
    
  `
  }

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
    background: ${bgGradientOnHover && theme.backgroundColorGradientAlt};
    z-index: -1;
  }
`
);

export const StyledCardWithShadow = styled(StyledCardBase)(
  ({ theme }) => `
  box-shadow: ${theme.boxShadow};
`
);
