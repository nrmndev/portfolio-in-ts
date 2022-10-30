import { ImgHTMLAttributes } from "react";
import {
  StyledImageBase,
  StyledImageRounded,
  StyledImageBordered,
  StyledImageWrapper,
} from "./image.styles";

export enum IMAGE_VARIANTS {
  BASE = "base",
  ROUNDED = "rounded",
  BORDERED = "bordered",
}
export enum IMAGE_ALIGN {
  LEFT = "left",
  RIGHT = "right",
  CENTER = "center",
}

export enum IMAGE_BORDER_SIZE {
  SM = "1rem",
  MD = "1.5rem",
  LG = "2rem",
  XL = "2.5rem",
}

type ImageType = {
  src: string;
  width: number;
  height: number;
  variant?: IMAGE_VARIANTS;
  align?: IMAGE_ALIGN;
  objectFit?: boolean;
  borderSize?: IMAGE_BORDER_SIZE;
  withWrapper?: boolean;
} & ImgHTMLAttributes<HTMLImageElement>;

const getImage = (variant = IMAGE_VARIANTS.BASE) =>
  ({
    [IMAGE_VARIANTS.BASE]: StyledImageBase,
    [IMAGE_VARIANTS.ROUNDED]: StyledImageRounded,
    [IMAGE_VARIANTS.BORDERED]: StyledImageBordered,
  }[variant]);

const Image = ({
  src,
  variant = IMAGE_VARIANTS.BASE,
  width,
  height,
  align = IMAGE_ALIGN.LEFT,
  alt = "",
  objectFit = false,
  withWrapper = false,
  borderSize,
  ...rest
}: ImageType) => {
  const CustomImage = getImage(variant);

  if (withWrapper) {
    return (
      <StyledImageWrapper borderSize={borderSize}>
        <CustomImage
          width={width}
          height={height}
          src={src}
          alt={alt}
          align={align}
          objectFit={objectFit}
          borderSize={borderSize}
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
        borderSize={borderSize}
        {...rest}
      />
    );
  }
};

export default Image;
