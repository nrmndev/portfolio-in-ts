import styled from "styled-components";

type VideoWidgetType = {
  readonly fullScreen: boolean;
};
export const StyledVideoWidget = styled.div<VideoWidgetType>(
  ({ theme, fullScreen }) => `
  max-width: ${fullScreen ? `160px` : `95px`};
  bottom: 15px;
  right: 15px;
  position: fixed;
  z-index: 50;
  /* Player ratio: 100 / (1280 / 720) */
  transition: all 0.25s ease-in-out;
  border-radius: 10px;
  background: ${theme.backgroundColorGradient};
  box-shadow: ${theme.boxShadow};
  padding: 8px;
  video {
    width: 100%;
    height: 100%;
    max-width: 160px;
    max-height: 266px;
  }
`
);

const StyledButtonsRawCSS = styled.span`
  padding: 3px 4px;
  background: rgba(0, 0, 0, 0);
  border-radius: 50%;
  color: #fff;
  position: absolute;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;
export const StyledFullScreenButton = styled(StyledButtonsRawCSS)`
  bottom: 13px;
  right: 12px;
`;

export const StyledAudioButton = styled(StyledButtonsRawCSS)`
  top: 10px;
  right: 25px;
`;

export const StyledPlayPauseButton = styled(StyledButtonsRawCSS)`
  top: 10px;
  right: 50px;
`;

export const StyledCloseButton = styled(StyledButtonsRawCSS)(
  ({ theme }) => `
  top: -9px;
  right: -9px;
  padding: 5px 6px;
  background: ${theme.backgroundColorGradient};
  box-shadow: ${theme.boxShadow};
  color: ${theme.colorPrimary};
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #fff;
    background: ${theme.backgroundColorGradientAlt};
  }
`
);

export const StyledVideoBannerTitle = styled.span(
  ({ theme }) => `
  position: absolute;
  top: 16px;
  left: -30px;
  padding: 5px 10px;
  background: ${theme.colorPrimary};
  color: #fff;
  font-size: 1rem;
  border-radius: 10px;
  border-bottom-right-radius: 0;
`
);
