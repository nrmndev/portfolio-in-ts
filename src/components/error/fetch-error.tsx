import Container from "../containers/container.component";
import { TEXT_AS } from "../theme-provider/utilities";
import Text from "../typography/text.component";

type Props = {
  error: string;
};
const FetchError = ({ error = "Not Found" }: Props) => {
  return (
    <Container fluid>
      <Text as={TEXT_AS.H3}>{error}</Text>
    </Container>
  );
};

export default FetchError;
