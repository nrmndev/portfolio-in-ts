import { ThemeProvider } from "styled-components";
import { useAppSelector } from "../../store/hooks/typedhooks";
import { uiTheme } from "../../store/ui/ui-selector";

type ReduxThemeProviderProps = {
  children: React.ReactNode;
};
const ReduxThemeProvider = ({ children }: ReduxThemeProviderProps) => {
  const theme = useAppSelector(uiTheme);

  return <ThemeProvider theme={{ theme: theme }}>{children}</ThemeProvider>;
};

export default ReduxThemeProvider;
