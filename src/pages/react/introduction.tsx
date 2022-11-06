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
      <Text as={TEXT_AS.H3}>Getting Started</Text>
      <Text>
        This page is an overview of all my skills process implemented using
        React and related resources.
      </Text>
      <Text>
        Feel free to take a look at other provided topics that you might find
        useful.
      </Text>
    </>
  );
};

export default ReactIntroduction;
