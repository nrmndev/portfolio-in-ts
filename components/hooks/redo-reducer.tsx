import React, { useEffect, useReducer, useState } from "react";

enum ActionType {
  ON_CHANGE = "ON_CHANGE",
  ON_CLICK = "ON_CLICK",
}
interface InputAction {
  type: ActionType.ON_CHANGE;
  name: string;
}
interface ButtonAction {
  type: ActionType.ON_CLICK;
}

type Action = InputAction | ButtonAction;

type State = {
  name: string;
}[];

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.ON_CHANGE:
      return state.concat({ name: action.name });
    case ActionType.ON_CLICK:
      return state;
    default:
      return defaultVal;
  }
};

const defaultVal = [
  {
    name: "",
  },
];
const Sample = () => {
  const [data, dispatchData] = useReducer(reducer, defaultVal);
  const [name, setName] = useState<string>("");
  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setName((prev) => (prev = e.currentTarget.value));
  };
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatchData({ type: ActionType.ON_CLICK });
    //console.log(data);
  };
  useEffect(() => {
    console.log(data);
  });
  return (
    <>
      <p>{data.map((e) => e.name)}</p>
      <input type="text" value={name} onChange={onChangeHandler} />
      <button onClick={onClickHandler}>Add to list</button>
      {data.length > 0 && data.map((n: any) => <p key={n.name}>{n.name}</p>)}
    </>
  );
};

export default Sample;
