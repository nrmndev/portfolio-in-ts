import React, { useState } from "react";

const Sample = () => {
  const [counter, setCounter] = useState<number>(0);

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={onClickHandler}>Click Me counter: {counter}</button>
    </div>
  );
};
export default Sample;
