import styled from "styled-components";

export const StyledTable = styled.table`
  border: 1px solid #dedede;
  th {
    padding: 5px;
    text-align: center;
    border-bottom: 1px solid #dedede;
  }
  tr {
    border-bottom: 1px solid #dedede;
  }
  td {
    padding: 5px;
    border-right: 1px solid #dedede;
    &:nth-of-type(2) {
      text-align: center;
    }
  }

  select option {
    background: none;
  }
`;
