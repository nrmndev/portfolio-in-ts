import styled from "styled-components";

const StyledFooter = styled.footer`
  min-height: 58px;
  text-align: center;
  font-size: 0.8rem;
  background: linear-gradient(
    272deg,
    rgba(67, 206, 162, 0.7) 0%,
    rgba(24, 90, 157, 0.9)
  );
  position: relative;
  z-index: 2;
  span {
    display: block;
    width: 100%;
    background: #fff;
  }
`;

export default StyledFooter;
