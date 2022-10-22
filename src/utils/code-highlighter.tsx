import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

type Props = {
  code: string;
  theme?: string;
  language: "jsx" | "html" | "css";
};
const WithLineNumbers = (props: Props) => {
  return (
    <Highlight {...defaultProps} theme={theme} code={props.code} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {/*className="Line"*/}
              <span className="LineNo">{i + 1}</span>
              <span className="LineContent">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default WithLineNumbers;
