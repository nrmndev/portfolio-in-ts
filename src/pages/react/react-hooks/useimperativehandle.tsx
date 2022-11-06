import { useRef } from "react";
import TestImperative from "./testImperative";
import RenderCode from "../../../components/prism-renderer/prism-renderer.component";
import Text from "../../../components/typography/text.component";
import {
  GAP_SEPARATOR_VARIANT,
  TEXT_AS,
} from "../../../components/theme-provider/utilities";
import GapSeparator from "../../../components/gap/gap.components";
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
      <Text as={TEXT_AS.H2}>useImperativeHandle</Text>
      <GapSeparator variant={GAP_SEPARATOR_VARIANT.LINE} />
      <TestImperative placeholder="Enter your name" ref={inputRef} />
      <Text>
        Child Component that has imperative handle function &quot;focus&quot;
      </Text>
      <RenderCode code={exampleCode} language="tsx" />
      <Text>
        Parent Component can now call the ref function &quot;focus&quot;
      </Text>
      <RenderCode code={exampleCode2} language="tsx" />
    </>
  );
};

export default ReactHooksUseImperative;
