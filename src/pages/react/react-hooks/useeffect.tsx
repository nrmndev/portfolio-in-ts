import React from "react";
import GapSeparator from "../../../components/gap/gap.components";
import RenderCode from "../../../components/prism-renderer/prism-renderer.component";
import {
  GAP_SEPARATOR_VARIANT,
  TEXT_AS,
} from "../../../components/theme-provider/utilities";
import Text from "../../../components/typography/text.component";
const exampleCode = `
import React, { useEffect } from "react";

const Example = () => {
  const [count, setCount] = useState<number>(0); 

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setCount(count+1);
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
`.trim();

const ReactHooksUseEffect = () => {
  return (
    <>
      <Text as={TEXT_AS.H2}>useEffect</Text>
      <GapSeparator variant={GAP_SEPARATOR_VARIANT.LINE} />
      <RenderCode code={exampleCode} language="jsx" />
      <p>
        On the example above, you tell React to change the document title. It
        will change everytime you click the button because we learned that when
        a state changes, it is being re-evaluated, useEffect is using your
        {` {count}`} state so therefore the document title is also being
        re-evaluated.
      </p>
    </>
  );
};

export default ReactHooksUseEffect;
