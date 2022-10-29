import { StyledThumbnailWrapper } from "./thumbnail-wrapper.styles";

type ThumbnailWrapperProps = {
  children: React.ReactNode;
};
const ThumbnailWrapper = ({ children }: ThumbnailWrapperProps) => {
  return <StyledThumbnailWrapper>{children}</StyledThumbnailWrapper>;
};

export default ThumbnailWrapper;
