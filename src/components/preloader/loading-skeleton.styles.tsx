import styled from "styled-components";

interface StyledLoadingSkeletonProps {
  readonly displayWidth: string;
  readonly displayType: string;
  readonly gap: number;
}

const handleType = (type: string) => {
  switch (type) {
    case "line":
    default:
      return `height: 3rem`;
    case "box":
      return `height: 8rem;`;
    case "circle":
      return `border-radius: 50%; height: 7rem; width: 7rem`;
  }
};

const handleWidthAndGap = (width: string, gap: number) => {
  return `width: calc(${width} - ${gap}px); 
  margin-left: ${gap}px; 
  margin-right: ${gap}px`;
};

export const StyledLoadingSkeleton = styled.div<StyledLoadingSkeletonProps>`
  display: inline-block;
  ${({ displayWidth, gap }) => handleWidthAndGap(displayWidth, gap)};
  ${({ displayType }) => handleType(displayType)};
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  position: relative;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.12);
  cursor: wait;
  -webkit-mask-image: radial-gradient(#fff, #000);
  mask-image: radial-gradient(#fff, #000);
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(transparent),
      color-stop(hsla(0, 0%, 100%, 0.4)),
      to(transparent)
    );
    background: linear-gradient(
      90deg,
      transparent,
      hsla(0, 0%, 100%, 0.4),
      transparent
    );
    -webkit-animation: skeleton-wave 1.75s linear infinite;
    animation: skeleton-wave 1.75s linear infinite;
  }

  @-webkit-keyframes skeleton-wave {
    0% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
    to {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
  }
  @keyframes skeleton-wave {
    0% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
    to {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
  }
`;

// export const StyledLoadingSkeletonLine = styled(StyledLoadingSkeletonBase)`
//   width: 80%;
//   margin: 0 10%;
// `;

// export const StyledLoadingSkeletonBox = styled(StyledLoadingSkeletonBase)`
//   height: 8rem;
// `;
