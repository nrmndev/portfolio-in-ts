import styled from "styled-components";

export const StyledTimelineContainer = styled.div(
  ({ theme }) => `
  padding-left: 50px;
  border-width: 0 0 0 5px;
  border-style: solid;
  border-color: ${theme.colorPallete1};
`
);

export const StyledTimelineItem = styled.div(
  ({ theme }) => `
  margin-top: 40px;
  position: relative;
  &:before,
  &:after {
    position: absolute;
    content: "";
    transform: translateY(-7px);
  }
  &:before {
    width: 55px;
    height: 5px;
    right: 100%;
    top: 63px;
    background: ${theme.colorPallete1};
    z-index: 0;
  }

  &:after {
    width: 15px;
    height: 15px;
    border: 5px solid ${theme.colorPallete1};
    border-radius: 100%;
    left: -66px;
    top: 53px;
    background: #fff;
    transition: background 0.4s ease-in-out;
  }
  &:hover {
    &:after {
      background: ${theme.colorPrimary};
    }
  }
`
);
