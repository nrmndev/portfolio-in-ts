import React, { useState } from "react";
import Button from "../../../components/button/button.component";
import GapSeparator from "../../../components/gap/gap.components";
import RenderCode from "../../../components/prism-renderer/prism-renderer.component";
import {
  TEXT_AS,
  BUTTON_VARIANT,
  GAP_SEPARATOR_VARIANT,
} from "../../../components/theme-provider/utilities";
import Text from "../../../components/typography/text.component";
const exampleCode = `
import React, { useState } from "react";

const Example = () => {
  const [count, setCount] = useState<number>(0); 

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setCount(count+1);
  }
  return (
    <div>
      <p>You clicked {count} times</Text>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
`.trim();

const ReactHooksUseState = () => {
  const [count, setCount] = useState<number>(0);

  const onClickHandler = (): void => {
    setCount(count + 1);
  };
  return (
    <>
      <Text as={TEXT_AS.H2}>useState</Text>
      <GapSeparator variant={GAP_SEPARATOR_VARIANT.LINE} />
      <Text as={TEXT_AS.P}>What is useState?</Text>
      <Text as={TEXT_AS.P}>
        useState is a Hook (function) that allows you to have state variables in
        functional components. It has two return values (getter, setter) that
        act like tuples. The first one is the state value, the second one is the
        function to update the value. We can destructure the two return values
        in array format (like tuples).
      </Text>
      <Text as={TEXT_AS.P}>
        Behind the scenes, React is listening to every changes of every
        &rsquo;state value&rsquo;, and everytime there is a change, react will
        evaluate the changes and rerender it to the ReactDOM
      </Text>
      <Text as={TEXT_AS.P}>
        Given example: const [count, setCount] = useState&lt;number&gt;(0)
        <br />
        <strong>count</strong>: is the &rsquo;variable&rsquo; that holds the
        &rsquo;state value&rsquo;.
        <br />
        <strong>setCount</strong>: is the function to update the value.
        <br />
        <strong>&lt;number&gt;</strong>: tells typeScript that the value for
        count should only be of type &rsquo;numbers&rsquo;
        <br />
        <strong>(0)</strong>: default value of state
      </Text>
      <RenderCode code={exampleCode} language="jsx" />
      <Text as={TEXT_AS.P}>
        On the example above, the button&rsquo;s onClick event is calling
        &rsquo;setCount&rsquo; and adds 1 to the current value. When the event
        is fired, React will re-evaluate behind the scenes and if there any
        changes, (in this case the value changed) it will tell ReactDOM to
        re-render that particular change in memory.
      </Text>
      <Text as={TEXT_AS.H4}>Try it!</Text>
      <hr />
      {count > 0 ? (
        <Text as={TEXT_AS.P}>You clicked the button {count} times</Text>
      ) : (
        <Text as={TEXT_AS.P}>Click the button below</Text>
      )}

      <Button onClick={onClickHandler} variant={BUTTON_VARIANT.gradient}>
        Click me
      </Button>
    </>
  );
};

export default ReactHooksUseState;
