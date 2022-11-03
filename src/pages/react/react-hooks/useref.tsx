import { useEffect } from "react";
import RenderCode from "../../../components/prism-renderer/prism-renderer.component";
import { useRef } from "react";
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
      <div>Sample use of Ref on HTMLElements</div>
      <RenderCode code={exampleCode} language="jsx" />
      <div>Sample use of Ref on Functions</div>
      <RenderCode code={exampleCode2} language="jsx" />
    </>
  );
};

export default ReactHooksUseRef;
