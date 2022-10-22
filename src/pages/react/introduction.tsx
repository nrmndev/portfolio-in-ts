// import React from "react";
// import WithLineNumbers from "../../utils/code-highlighter";

// const exampleCode = `
// import React, { useState } from "react";

// const Example = () => {
//   const [count, setCount] = useState<number>(0);

//   const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
//     setCount(count+1);
//   }
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
// `.trim();

const ReactIntroduction = () => {
  return (
    <>
      <h3>Getting Started</h3>
      <p>
        This page is an overview of all my skills process implemented using
        React and related resources.
      </p>
      <p>
        Feel free to take a look at other provided topics that you might find
        useful.
      </p>
    </>
  );
};

export default ReactIntroduction;
