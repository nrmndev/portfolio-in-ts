import WithLineNumbers from "../../../utils/code-highlighter";
import styles from "./custom.module.css";
const exampleCode = `
import styles from "./custom.module.css";
const Example = () => {
  return (
    <div>
    <p className={\`\${styles.primary} \${styles.underline} pt-2\`}>
    This paragraph element is being styled using module css
  </p>
  <p className={\`\${styles["text-danger"]} \${styles.underline}\`}>
    Classnames with dashes and hypens needs a different approach
  </p>
  <hr />
  <p>
    Attributes, ID, elements, pseudo classes, and etc. still works even
    inside module css. But its not a best practice.
  </p>

  <div data-theme="red">
    This DIV element is being styled using attribute selector inside module
    css
  </div>
    </div>
  );
}
`.trim();

const exampleCode2 = `
.text-danger {
  color: red;
}

.primary {
  color: #43cea2;
}

.underline {
  text-decoration: underline;
}
div[data-theme="red"] {
  background: red;
  color: white;
}

#button {
  background: black;
  color: white;
}
`.trim();

const CSSModuleCSS = () => {
  return (
    <>
      <p className="color_1">
        The main purpose of modular css is to eliminate class clashes. The
        compiler generates unique string suffixes on your class, simply to make
        it, unique.
      </p>
      <WithLineNumbers code={exampleCode2} language="jsx" />
      <p>Your component</p>
      <WithLineNumbers code={exampleCode} language="jsx" />
      <p>Result:</p>
      <p className={`${styles.primary} ${styles.underline} pt-2`}>
        This paragraph element is being styled using module css
      </p>
      <p className={`${styles["text-danger"]} ${styles.underline}`}>
        Classnames with dashes and hypens needs a different approach
      </p>
      <hr />
      <p>
        Attributes, ID, elements, pseudo classes, and etc. still works even
        inside module css. But its not a best practice.
      </p>

      <div data-theme="red">
        This DIV element is being styled using attribute selector inside module
        css
      </div>
      <br />
      <button id="button">ID css still works</button>
    </>
  );
};

export default CSSModuleCSS;
