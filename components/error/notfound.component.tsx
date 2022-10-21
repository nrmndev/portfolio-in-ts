import Text, { TEXT_VARIANTS } from "../typography/text.component";

type NotFoundProps = {
  text: string;
};
const NotFound = ({ text }: NotFoundProps) => {
  return <Text value={text} as={TEXT_VARIANTS.H4} />;
};

export default NotFound;
