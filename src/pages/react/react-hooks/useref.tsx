import { useEffect } from "react";
import RenderCode from "../../../components/prism-renderer/prism-renderer.component";
import { useRef } from "react";
import Text from "../../../components/typography/text.component";
import {
  GAP_SEPARATOR_VARIANT,
  TEXT_AS,
} from "../../../components/theme-provider/utilities";
import GapSeparator from "../../../components/gap/gap.components";
const exampleCode = `
import React, { useRef } from "react";

const Example = () => {
  //Refs around HTML Elements, example for DIVs
  const divRef = useRef<HTMLDivElement>(null);
  divRef.current?.classList.add("REF");

  return (
    <>
      <div ref={divRef}>I have a classname called 'REF'</div>
    </>
  );
}
`.trim();

const exampleCode2 = `
import React, { useRef } from "react";

const Example = () => {
  const myFuncRef = useRef(() => {});

  myFuncRef.current = () => {
    console.log("I am logged");
  };

  useEffect(() => {
    //Fire the function
    myFuncRef.current();
  });
}
`.trim();

const ReactHooksUseRef = () => {
  const myFuncRef = useRef(() => {
    console.log("I am logged");
  });

  myFuncRef.current = () => {
    console.log("I am logged");
  };

  useEffect(() => {
    //Fire the function
    myFuncRef.current();
  });
  return (
    <>
      <Text as={TEXT_AS.H2}>useReducer</Text>
      <GapSeparator variant={GAP_SEPARATOR_VARIANT.LINE} />
      <Text>Sample use of Ref on HTMLElements</Text>
      <RenderCode code={exampleCode} language="tsx" />
      <Text>Sample use of Ref on Functions</Text>
      <RenderCode code={exampleCode2} language="tsx" />
    </>
  );
};

export default ReactHooksUseRef;
