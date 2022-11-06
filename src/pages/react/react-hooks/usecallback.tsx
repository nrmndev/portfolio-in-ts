import RenderCode from "../../../components/prism-renderer/prism-renderer.component";
import { useState, useCallback } from "react";
import Text from "../../../components/typography/text.component";
import {
  GAP_SEPARATOR_VARIANT,
  TEXT_AS,
} from "../../../components/theme-provider/utilities";
import GapSeparator from "../../../components/gap/gap.components";
import Button from "../../../components/button/button.component";
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
      <Text as={TEXT_AS.H2}>useContext</Text>
      <GapSeparator variant={GAP_SEPARATOR_VARIANT.LINE} />
      <RenderCode code={exampleCode} language="tsx" />
      {showParagraph && (
        <Text>Hello I am visibile when showParagraph is set to true</Text>
      )}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </>
  );
};

export default ReactHooksUseCallback;
