import styled from "styled-components";

export const StyledMessageContainer = styled.div(
  ({ theme }) => `
  background: ${theme.colorWhite_Color4};
  width: 100%;
  align-items: center;
  align-content: center;
  display: flex;
  img {
    max-width: 50px;
    height: auto;
    width: 100%;
    display: block;
    position: absolute;
    top: -25px;
    left: 15px;
    background: ${theme.colorWhite_Color4};
    border-radius: 50%;
    padding: 3px;
  }
  p {
    padding-left: 70px;
    position: relative;
    color: ${theme.colorPrimaryAndWhite};
    white-space: nowrap;
    overflow: hidden;
    font-size: .9rem;
    margin-bottom: 0;
    margin-top: 0;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`
);
