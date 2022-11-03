import { ImgHTMLAttributes } from "react";
import { BORDER_WIDTH, IMAGE_VARIANT } from "../theme-provider/utilities";
import {
  StyledImageBase,
  StyledImageRounded,
  StyledImageBordered,
  StyledImageWrapper,
} from "./image.styles";

export enum IMAGE_ALIGN {
  LEFT = "left",
  RIGHT = "right",
  CENTER = "center",
}

type ImageType = {
  src: string;
  width: number;
  height: number;
  variant?: IMAGE_VARIANT;
  align?: IMAGE_ALIGN;
  objectFit?: boolean;
  borderWidth?: BORDER_WIDTH;
  withWrapper?: boolean;
} & ImgHTMLAttributes<HTMLImageElement>;

const getImage = (variant = IMAGE_VARIANT.BASE) =>
  ({
    [IMAGE_VARIANT.BASE]: StyledImageBase,
    [IMAGE_VARIANT.ROUNDED]: StyledImageRounded,
    [IMAGE_VARIANT.BORDERED]: StyledImageBordered,
  }[variant]);

const Image = ({
  src,
  variant = IMAGE_VARIANT.BASE,
  width,
  height,
  align = IMAGE_ALIGN.LEFT,
  alt = "",
  objectFit = false,
  withWrapper = false,
  borderWidth = BORDER_WIDTH.NONE,
  ...rest
}: ImageType) => {
  const CustomImage = getImage(variant);

  if (withWrapper) {
    return (
      <StyledImageWrapper borderWidth={borderWidth}>
        <CustomImage
          width={width}
          height={height}
          src={src}
          alt={alt}
          align={align}
          objectFit={objectFit}
          borderWidth={borderWidth}
          {...rest}
        />
      </StyledImageWrapper>
    );
  } else {
    return (
      <CustomImage
        width={width}
        height={height}
        src={src}
        alt={alt}
        align={align}
        objectFit={objectFit}
        borderWidth={borderWidth}
        {...rest}
      />
    );
  }
};

export default Image;
