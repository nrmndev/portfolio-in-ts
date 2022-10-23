import React from "react";
import WithLineNumbers from "../../utils/code-highlighter";
import { useState, useCallback } from "react";
const exampleCode = `
import React, { useState, useCallback } from "react";

const Example = () => {
  const [showParagraph, setShowParagraph] = useState<boolean>(false); 

  const toggleParagraphHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>): void => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  },[]);

  return (
    <div>
      {showParagraph && <p>Hello I am visibile when showParagraph is set to true</p>}
      <button onClick={toggleParagraphHandler}>Toggle Paragraph!</button>
    </div>
  );
}
`.trim();

const UseEffectSample = () => {
  const [showParagraph, setShowParagraph] = useState<boolean>(false);

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);
  return (
    <>
      <p className="color_1">useCallback</p>
      <WithLineNumbers code={exampleCode} language="jsx" />
      <div>
        {showParagraph && (
          <p>Hello I am visibile when showParagraph is set to true</p>
        )}
        <button onClick={toggleParagraphHandler}>Toggle Paragraph!</button>
      </div>
    </>
  );
};

export default UseEffectSample;
