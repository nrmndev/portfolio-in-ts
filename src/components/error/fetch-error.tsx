import { Row, Col } from "react-bootstrap";
import Text, { TEXT_VARIANTS } from "../typography/text.component";
import StyledFetchErrorContainer from "./fetch-error.styles";

type Props = {
  error: string;
};
const FetchError = ({ error = "Not Found" }: Props) => {
  return (
    <StyledFetchErrorContainer fluid>
      <Row>
        <Col className="flex__center">
          <Text as={TEXT_VARIANTS.H3}>{error}</Text>
        </Col>
      </Row>
    </StyledFetchErrorContainer>
  );
};

export default FetchError;
