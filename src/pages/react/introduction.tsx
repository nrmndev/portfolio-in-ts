import {
  FONT_SIZE_AS,
  TEXT_ALIGN,
  TEXT_AS,
} from "../../components/theme-provider/utilities";
import Text from "../../components/typography/text.component";

const ReactIntroduction = () => {
  return (
    <>
      <Text
        as={TEXT_AS.H2}
        fontSizeAs={FONT_SIZE_AS.H1}
        textAlign={TEXT_ALIGN.CENTER}
      >
        ReactJS Cheat Sheet
      </Text>
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
