import React, { useState } from "react";
import WithLineNumbers from "../../utils/code-highlighter";

const exampleCode = `
import React, { useState } from "react";

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

const UseStateSample = () => {
  const [count, setCount] = useState<number>(0);

  const onClickHandler = (): void => {
    setCount(count + 1);
  };
  return (
    <>
      <h3>useState</h3>
      <hr />
      <p>What is useState?</p>
      <p>
        useState is a Hook (function) that allows you to have state variables in
        functional components. It has two return values (getter, setter) that
        act like tuples. The first one is the state value, the second one is the
        function to update the value. We can destructure the two return values
        in array format (like tuples).
      </p>
      <p>
        Behind the scenes, React is listening to every changes of every
        &rsquo;state value&rsquo;, and everytime there is a change, react will
        evaluate the changes and rerender it to the ReactDOM
      </p>
      <p>
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
      </p>
      <WithLineNumbers code={exampleCode} language="jsx" />
      <p>
        On the example above, the button&rsquo;s onClick event is calling
        &rsquo;setCount&rsquo; and adds 1 to the current value. When the event
        is fired, React will re-evaluate behind the scenes and if there any
        changes, (in this case the value changed) it will tell ReactDOM to
        re-render that particular change in memory.
      </p>
      <h4>Try it!</h4>
      <hr />
      {count > 0 ? (
        <p>You clicked the button {count} times</p>
      ) : (
        <p>Click the button below</p>
      )}

      <button onClick={onClickHandler}>Click me</button>
    </>
  );
};

export default UseStateSample;
