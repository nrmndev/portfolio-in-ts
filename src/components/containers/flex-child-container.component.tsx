import { StyledFlexChildContainer } from "./flex-child-container.styles";

type FlexChildContainerProps = {
  flexBasis?: string | undefined;
  children: React.ReactNode;
};
const FlexChildContainer = ({
  flexBasis,
  children,
}: FlexChildContainerProps) => {
  return (
    <StyledFlexChildContainer flexBasis={flexBasis}>
      {children}
    </StyledFlexChildContainer>
  );
};

export default FlexChildContainer;
