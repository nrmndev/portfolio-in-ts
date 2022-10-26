import React, { useRef, useImperativeHandle } from "react";
type Props = {
  placeholder: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
};
const TestImperative = React.forwardRef(
  (props: Props, ref: React.ForwardedRef<unknown>) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
    }));
    return (
      <input
        type="text"
        ref={inputRef}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    );
  }
);
TestImperative.displayName = "TestImperative";
export default TestImperative;
