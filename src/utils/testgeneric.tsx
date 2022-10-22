import React, { Children, useState } from "react";
import { JsxEmit } from "typescript";

interface Props {
  name: string;
}

const Test: React.FC<Props> = ({ name }) => {
  const [state, setState] = useState<{ fullname: string | null }>({
    fullname: "",
  });

  return <>Hello {name}</>;
};

export default Test;

//////////////////////////

interface FormProps<T> {
  values: T;
  children: (values: T) => JSX.Element;
}

const Form = <T extends {}>({ values, children }: FormProps<T>) => {
  // return children(values)
  return children(values);
};

const Component: React.FC = () => {
  return <Form values="12">{(values) => <div>{values}</div>}</Form>;
};
