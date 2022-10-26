import WithLineNumbers from "../../../utils/code-highlighter";
import "./theming.scss";

const exampleCode = `
<body class="theme-1">
`.trim();

const exampleCode2 = `
import "./theming.scss";

const Example = () => {
  return (
    <div className="container">
      <div className="left">
        <button className="button">I am a button</button>
      </div>
      <div className="right"></div>
    </div>
  );
}
`.trim();

const exampleCode3 = `
@mixin themable(
  $theme-name,
  $container-bg,
  $left-bg,
  $right-bg,
  $innertext,
  $button-bg
) {
  .#{$theme-name} {
    .container {
      background-color: $container-bg;
      border: 1px solid #000;
      display: flex;
      height: 500px;
      justify-content: space-between;
      margin: 0 auto;
      padding: 1em;

      .left {
        background-color: $left-bg;
        height: 100%;
        width: 69%;
      }

      .right {
        background-color: $right-bg;
        height: 100%;
        position: relative;
        width: 29%;
      }

      .button {
        background-color: $button-bg;
        border: 0;
        border-radius: 10px;
        bottom: 10px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: bold;
        padding: 1em 2em;
      }
    }
  }
}

@include themable(theme-dark, #43cea2, #497265, #82aa91, #fff, #e24027);
`.trim();

const CSSThemingSASS = () => {
  return (
    <>
      <p className="color_1">
        Mixin Approach for multiple theming. We create a
        &lsquo;function-like&rsquo; mixin that accepts parameters as variables
        for your styles
      </p>
      <p>In this example, body has a class of &quot;theme-dark&quot;:</p>
      <WithLineNumbers code={exampleCode} language="jsx" />
      <p>Sample SCSS mixin:</p>
      <WithLineNumbers code={exampleCode3} language="jsx" />
      <p>
        The mixin &quot;themable&quot; accepts 6 parameters, ( $theme-name,
        $container-bg, $left-bg, $right-bg, $innertext, $button-bg) then assign
        it as value to properties. Then you include the themable to your main
        css.
      </p>
      <p>
        This approach will save a lot of time and eliminate errors and css
        classes especially on large projects that requires to be themable.
      </p>
      <p>Your component:</p>
      <WithLineNumbers code={exampleCode2} language="jsx" />
      <p>Result:</p>
      <div className="container">
        <div className="left">
          <button className="button">I am a button</button>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
};

export default CSSThemingSASS;
