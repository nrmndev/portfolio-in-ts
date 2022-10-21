import { ImgHTMLAttributes } from "react";
import {
  StyledImageBase,
  StyledImageRounded,
  StyledImageBordered,
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

type ImageType = {
  src: string;
  width: number;
  height: number;
  variant?: IMAGE_VARIANTS;
  align?: IMAGE_ALIGN;
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
}: ImageType) => {
  const CustomImage = getImage(variant);
  return (
    <CustomImage
      width={width}
      height={height}
      src={src}
      alt={alt}
      align={align}
    />
  );
};

export default Image;
