import { useRef } from "react";
import TestImperative from "./testImperative";
import RenderCode from "../../../components/prism-renderer/prism-renderer.component";
const exampleCode = `
import React, { useState } from "react";

import React, { useRef, useImperativeHandle } from "react";
type Props = {
  placeholder: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
};
const ExampleChild = React.forwardRef(
  (props: Props, ref: React.ForwardedRef<unknown>) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
    }));
    return (
      <input
        type="text"
        ref={inputRef}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    );
  }
);
`.trim();

const exampleCode2 = `
import React, { useRef, useImperativeHandle } from "react";
import ExampleChild from "./examplechild";
type Props = {
  placeholder: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
};
const ExampleParent = () => {
  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {};
  const inputRef = useRef<HTMLInputElement>(null);
  inputRef.current?.focus();

    return (
      <ExampleChild
        type="text"
        ref={inputRef}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    );
  }
);
`.trim();

const ReactHooksUseImperative = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  inputRef.current?.focus();
  return (
    <>
      <TestImperative placeholder="Enter your name" ref={inputRef} />
      <p className="color_1">
        Child Component that has imperative handle function &quot;focus&quot;
      </p>
      <RenderCode code={exampleCode} language="jsx" />
      <p className="color_1">
        Parent Component can now call the ref function &quot;focus&quot;
      </p>
      <RenderCode code={exampleCode2} language="jsx" />
    </>
  );
};

export default ReactHooksUseImperative;
