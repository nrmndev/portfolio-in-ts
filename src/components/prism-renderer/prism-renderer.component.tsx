import Highlight, { defaultProps, Language } from "prism-react-renderer";
// import darkTheme from "prism-react-renderer/themes/nightOwl";
// import lightTheme from "prism-react-renderer/themes/nightOwlLight";
import lightTheme from "prism-react-renderer/themes/vsLight";
import darkTheme from "prism-react-renderer/themes/vsDark";
import { useAppSelector } from "../../store/hooks/typedhooks";
import { uiTheme } from "../../store/ui/ui-selector";
import { PrismCodeContainer } from "./prism-renderer.styles";

type Props = {
  code: string;
  theme?: string;
  language: Language;
};
//language: "jsx" | "html" | "css" | "json" | "tsx" | "scss";
const RenderCode = (props: Props) => {
  const storeTheme = useAppSelector(uiTheme);
  let prismTheme = darkTheme;
  if (storeTheme === "light") {
    prismTheme = lightTheme;
  }
  return (
    <Highlight
      {...defaultProps}
      theme={prismTheme}
      code={props.code}
      language="jsx"
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <PrismCodeContainer>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {/*className="Line"*/}
              {/* <span className="LineNo">{i + 1}</span> */}
              <span className="LineContent">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </PrismCodeContainer>
      )}
    </Highlight>
  );
};

export default RenderCode;
