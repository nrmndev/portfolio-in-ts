// styled.d.ts
import "styled-components";
interface IPalette {
  main: string;
  contrastText: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    theme: string;
    backgroundColor: string;
    backgroundColorFlat: string;
    backgroundColorFlatAlt: string;
    backgroundColorGradient: string;
    backgroundColorGradientAlt: string;
    borderColor: string;
    boxShadow: string;
    boxShadowInset: string;
    color: string;
    colorAsGradientClip: string;
    colorPrimary: string;
    colorWithContrast: string;
    colorContrast: string;
    colorPallete1: string;
  }
}
// borderRadius: string;
// palette: {
//   common: {
//     black: string;
//     white: string;
//   };
//   primary: IPalette;
//   secondary: IPalette;
// };
