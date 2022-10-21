import { HTMLAttributes } from "react";
import { StyledContainerBoxed } from "./container-boxed.styles";

type ContainerBoxedProps = {
  children: React.ReactNode;
  borderColor?: string;
} & HTMLAttributes<HTMLElement>;

const ContainerBoxed = ({
  children,
  borderColor = "transparent",
  ...rest
}: ContainerBoxedProps) => {
  return (
    <StyledContainerBoxed borderColor={borderColor} {...rest}>
      {children}
    </StyledContainerBoxed>
  );
};

export default ContainerBoxed;
