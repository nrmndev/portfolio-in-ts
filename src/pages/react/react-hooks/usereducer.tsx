import GapSeparator from "../../../components/gap/gap.components";
import {
  GAP_SEPARATOR_VARIANT,
  TEXT_AS,
} from "../../../components/theme-provider/utilities";
import Text from "../../../components/typography/text.component";

const ReactHooksUseReducer = () => {
  return (
    <>
      <Text as={TEXT_AS.H2}>useReducer</Text>
      <GapSeparator variant={GAP_SEPARATOR_VARIANT.LINE} />
      <Text>Content in the works... Stay tuned!</Text>
      <Text>
        Feel free to take a look at other provided topics that you might find
        useful.
      </Text>
    </>
  );
};

export default ReactHooksUseReducer;
