import { TEXT_AS } from "../theme-provider/utilities";
import Text from "../typography/text.component";

type NotFoundProps = {
  text: string;
};
const NotFound = ({ text }: NotFoundProps) => {
  return <Text as={TEXT_AS.H4}>{text}</Text>;
};

export default NotFound;
