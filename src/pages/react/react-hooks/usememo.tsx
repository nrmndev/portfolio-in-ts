//import useSortList from "./usememo-sample";
import GapSeparator from "../../../components/gap/gap.components";
import RenderCode from "../../../components/prism-renderer/prism-renderer.component";
import {
  GAP_SEPARATOR_VARIANT,
  TEXT_AS,
} from "../../../components/theme-provider/utilities";
import Text from "../../../components/typography/text.component";
const exampleCode = `
import { useMemo } from "react";

const useSortList = (props: number[]): number[] => {
  const sort: number[] = useMemo(
    () => props.sort((a: number, b: number) => a - b),
    [props]
  );
  return sort.join();
};

export default useSortList;
`.trim();

const exampleCode2 = `
import useSortList from "./useSortList"
const sampleData = [100, 500, 5, 11, 25];
const sortedSampleData = useSortList(sampleData);
return (
  <>
    {sortedSampleData && <p>{sortedSampleData}</p>}
  </>
);
`.trim();

const ReactHooksUseMemo = () => {
  const sampleData = [100, 500, 5, 11, 25];
  //const sortedSampleData = useSortList(sampleData);
  return (
    <>
      <Text as={TEXT_AS.H2}>Context API</Text>
      <GapSeparator variant={GAP_SEPARATOR_VARIANT.LINE} />
      <Text>
        Custom Hook with Memoized function, This will cause the function to only
        run when needed
      </Text>

      <RenderCode code={exampleCode} language="tsx" />
      <Text>Your Parent Component</Text>

      <RenderCode code={exampleCode2} language="tsx" />
      <Text>Result</Text>
      {sampleData && <p>{sampleData}</p>}
    </>
  );
};

export default ReactHooksUseMemo;
