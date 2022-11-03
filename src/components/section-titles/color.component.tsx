import { StyledColor } from "./color.styles";
// export type BackgroundTypes = {
//   bg: typeof BGBASE;
// };

export enum BGBASE {
  PRIMARY = "red",
  SECONDARY = "blue",
  WHITE = "white",
}
type Props = {
  children: React.ReactNode;
  bg?: BGBASE | string;
};

const ColorTest = ({ bg = BGBASE.PRIMARY, children }: Props) => {
  return <StyledColor bg={bg}>{children}</StyledColor>;
};

export default ColorTest;

export const Sample = () => {
  return <ColorTest bg="red">SAMPLE</ColorTest>;
};
