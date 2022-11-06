import GapSeparator from "../../../components/gap/gap.components";
import {
  GAP_SEPARATOR_VARIANT,
  TEXT_AS,
} from "../../../components/theme-provider/utilities";
import Text from "../../../components/typography/text.component";

const ReactRouterDynamicRoute = () => {
  return (
    <>
      <Text as={TEXT_AS.H2}>React Router - Dynamic Routing</Text>
      <GapSeparator variant={GAP_SEPARATOR_VARIANT.LINE} />
      <Text>Content in the works, please stay tuned</Text>
    </>
  );
};

export default ReactRouterDynamicRoute;
