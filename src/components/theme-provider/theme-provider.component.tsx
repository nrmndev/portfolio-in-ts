import { DefaultTheme, ThemeProvider } from "styled-components";
import { useAppSelector } from "../../store/hooks/typedhooks";
import { uiTheme } from "../../store/ui/ui-selector";
import { themeDark, themeLight } from "./theme";

type ReduxThemeProviderProps = {
  children: React.ReactNode;
};
const ReduxThemeProvider = ({ children }: ReduxThemeProviderProps) => {
  const theme = useAppSelector(uiTheme);
  let restTheme: DefaultTheme;
  if (theme === "dark") {
    restTheme = { ...themeDark, theme: theme };
  } else {
    restTheme = { ...themeLight, theme: theme };
  }
  // restTheme = { ...restTheme, ...themeUtilities };
  //console.log(restTheme);
  return <ThemeProvider theme={restTheme}>{children}</ThemeProvider>;
};

export default ReduxThemeProvider;
