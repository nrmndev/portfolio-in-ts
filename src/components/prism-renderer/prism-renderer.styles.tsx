import styled from "styled-components";

export const PrismCodeContainer = styled.pre(
  ({ theme }) => `
  color: rgb(0, 0, 0);
  background-color: ${theme.backgroundColorFlat};
  text-align: left;
  margin: 1rem 0;
  padding: 0.5rem;
  border-width: 1px;
  border-style: solid;
  margin-left: -20px;
  margin-right: -20px;
  padding 1.5rem;
  border-radius: 20px;
  border-color: ${theme.colorPallete1};

`
);
