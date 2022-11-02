import styled from "styled-components";

export const StyledSettingsCheckbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

type LabelProps = {
  readonly active: boolean;
};

export const StyledSettingsLabel = styled.label<LabelProps>(
  ({ theme, active }) => `
  color: ${active ? theme.colorPrimary : theme.colorWithContrast};
  position: relative;
  right: -40px;
  cursor: pointer;
  transition: color 0.35s ease-in-out;
  text-transform: uppercase;
  &:hover {
    color: ${theme.colorPrimary};
    span {
      transform: translateX(-40px);
    }
  }
  svg {
    font-size: 1.5rem;
  }
  span {
    -webkit-transition: 0.3s -webkit-transform ease-in;
    -webkit-transition: 0.3s transform ease-in;
    transition: 0.3s transform ease-in;
    transform: translateX(40px);
    text-align: right;
    display: block;
    font-size: 0.7rem;
    position: relative;
  }
`
);

export const StyledSettingsContainer = styled.div`
  top: calc(50vh - 10px);
  right: 5px;
  position: fixed;
  width: auto;
  height: auto;
  padding: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
