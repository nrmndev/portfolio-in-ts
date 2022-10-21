import styled from "styled-components";
interface StyledBaseCardProps {
  //readonly textAlign: string;
}
export const StyledCardContent = styled.div`
  transition: transform 0.3s ease-in;
  transform: translateY(10px);
`;
export const StyledCardBase = styled.div<StyledBaseCardProps>`
  border-radius: 10px;
  padding: 35px 50px 35px 50px;
  background: linear-gradient(165deg, #fff 50%, #edebeb 80%);
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    transition: opacity 0.3s ease-in;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    top: 0;
    left: 0;
    background: linear-gradient(165deg, #fff 0%, #fafafa 50%);
    opacity: 0;
    z-index: 0;
  }
  &:hover ${StyledCardContent} {
    transform: translateY(0);
  }
`;

export const StyledCardWithShadow = styled(StyledCardBase)`
  box-shadow: 2px 2px 15px #d8d5d5;
`;
