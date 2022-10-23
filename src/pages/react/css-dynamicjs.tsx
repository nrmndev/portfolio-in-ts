import { useState } from "react";
import WithLineNumbers from "../../utils/code-highlighter";

const exampleCode = `
import { useState } from "react";

const Example = () => {
  const [error, setError] = useState(true);
  return (
    <p style={{ color: error ? "red" : "black" }}>
    The style of this paragraph is dynamic to the value of state 'error'
  </p>
  <p className={error ? "text-danger text-underline" : "text-primary"}>
    The class of this paragraph is dynamic to the value of state 'error'
  </p>
  );
}
`.trim();

const UseEffectSample = () => {
  const error = useState(true)[0];

  return (
    <>
      <p className="color_1">
        Dynamic CSS can be achieved by using JavaScript, in this example you can
        see that the styles and className is conditionally applied based on the
        value of &apos;error&apos; state
      </p>
      <WithLineNumbers code={exampleCode} language="jsx" />
      <p style={{ color: error ? "red" : "black" }}>
        The style of this paragraph is dynamic to the value of state
        &apos;error&apos;
      </p>
      <p className={error ? "text-danger text-underline" : "text-primary"}>
        The class of this paragraph is dynamic to the value of state
        &apos;error&apos;
      </p>
    </>
  );
};

export default UseEffectSample;
