import Text, { TEXT_VARIANTS } from "../typography/text.component";

type NotFoundProps = {
  text: string;
};
const NotFound = ({ text }: NotFoundProps) => {
  return <Text as={TEXT_VARIANTS.H4}>{text}</Text>;
};

export default NotFound;
