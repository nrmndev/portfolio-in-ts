import React, { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./rtg.scss";
import WithLineNumbers from "../../utils/code-highlighter";

const exampleCode = `
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./rtg.scss";

const Example = () => {
  const nodeRef = useRef<HTMLParagraphElement>(null);
  const [showParagraph, setShowParagraph] = useState<boolean>(false);

  return (
    <div id="csstransition">
      <CSSTransition
        nodeRef={nodeRef}
        timeout={3000}
        in={showParagraph}
        classNames={{
          appear: "my-appear",
          appearActive: "my-active-appear",
          appearDone: "my-done-appear",
          enter: "my-enter",
          enterActive: "my-active-enter",
          enterDone: "my-done-enter",
          exit: "my-exit",
          exitActive: "my-active-exit",
          exitDone: "my-done-exit",
        }}
        unmountOnExit
      >
        <p ref={nodeRef}>Did I animate?</p>
      </CSSTransition>
      <button onClick={() => setShowParagraph(true)}>Click to Animate</button>
    </div>
  );
}
`.trim();

const exampleCode2 = `
@mixin transition($s) {
  transition: all $s cubic-bezier(0.075, 0.82, 0.165, 1);
  -webit-transition: all $s cubic-bezier(0.075, 0.82, 0.165, 1);
  -moz-transition: all $s cubic-bezier(0.075, 0.82, 0.165, 1);
}
#csstransition { //added ID just to avoid clash
  .my-appear {
    @include transition(3s);
    color: #fff;
  }
  .my-active-appear {
    background-color: aqua;
    @include transition(3s);
    color: #222;
  }
  .my-done-appear {
    background-color: teal;
    @include transition(3s);
    color: #fff;
  }
  .my-enter {
    background-color: darkblue;
    @include transition(3s);
    color: #fff;
  }
  .my-active-enter {
    background-color: cornflowerblue;
    @include transition(3s);
    color: #fff;
  }
  .my-done-enter {
    background-color: darkmagenta;
    @include transition(3s);
    color: yellow;
  }
  .my-exit {
    background-color: darkkhaki;
    @include transition(3s);
  }
  .my-active-exit {
    background-color: gold;
    @include transition(3s);
    color: #222;
  }
  .my-done-exit {
    background-color: yellow;
    @include transition(3s);
    color: blue;
  }
}
`.trim();

const UseEffectSample = () => {
  const nodeRef = useRef<HTMLParagraphElement>(null);
  const [showParagraph, setShowParagraph] = useState<boolean>(false);

  return (
    <>
      <p className="color_1">React Transition Group</p>
      <p>Sample Usage:</p>
      <div id="csstransition">
        <CSSTransition
          nodeRef={nodeRef}
          timeout={3000}
          in={showParagraph}
          classNames={{
            appear: "my-appear",
            appearActive: "my-active-appear",
            appearDone: "my-done-appear",
            enter: "my-enter",
            enterActive: "my-active-enter",
            enterDone: "my-done-enter",
            exit: "my-exit",
            exitActive: "my-active-exit",
            exitDone: "my-done-exit",
          }}
          mountOnEnter
          unmountOnExit
        >
          <p ref={nodeRef}>Did I animate?</p>
        </CSSTransition>
        <button onClick={() => setShowParagraph(true)}>Click to Animate</button>
      </div>
      <hr />
      <p>Your Component (ClassNames Approach):</p>
      <WithLineNumbers code={exampleCode} language="jsx" />
      <p>SCSS:</p>
      <WithLineNumbers code={exampleCode2} language="jsx" />
    </>
  );
};

export default UseEffectSample;
