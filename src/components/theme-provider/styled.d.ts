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
    colorAlt: string;
    colorAsGradientClip: string;
    colorPrimary: string;
    colorWithContrast: string;
    colorContrast: string;
    colorPallete1: string;

    colorSecondary: string;
    colorDanger: string;
    colorWarning: string;
    colorPrimaryAndWhite: string;
    bgPrimary: string;
    bgSecondary: string;
    gradientPrimary: string;
    gradientSecondary: string;
    gradientClip: string;

    colorWhite_Color4: string;
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
