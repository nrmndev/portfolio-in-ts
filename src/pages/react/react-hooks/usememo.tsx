import WithLineNumbers from "../../../utils/code-highlighter";
//import useSortList from "./usememo-sample";
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
      <p>
        Custom Hook with Memoized function, This will cause the function to only
        run when needed
      </p>

      <WithLineNumbers code={exampleCode} language="jsx" />
      <p>Your Parent Component</p>

      <WithLineNumbers code={exampleCode2} language="jsx" />
      <p>Result</p>
      {sampleData && <p>{sampleData}</p>}
    </>
  );
};

export default ReactHooksUseMemo;
