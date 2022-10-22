import { useEffect } from "react";
import WithLineNumbers from "../../utils/code-highlighter";
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

const UseEffectSample = () => {
  const myFuncRef = useRef(() => {});

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
      <WithLineNumbers code={exampleCode} language="jsx" />
      <div>Sample use of Ref on Functions</div>
      <WithLineNumbers code={exampleCode2} language="jsx" />
    </>
  );
};

export default UseEffectSample;
