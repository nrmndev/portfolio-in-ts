import RenderCode from "../../../components/prism-renderer/prism-renderer.component";
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

const ReactHooksUseCallback = () => {
  const [showParagraph, setShowParagraph] = useState<boolean>(false);

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);
  return (
    <>
      <p className="color_1">useCallback</p>
      <RenderCode code={exampleCode} language="jsx" />
      <div>
        {showParagraph && (
          <p>Hello I am visibile when showParagraph is set to true</p>
        )}
        <button onClick={toggleParagraphHandler}>Toggle Paragraph!</button>
      </div>
    </>
  );
};

export default ReactHooksUseCallback;
