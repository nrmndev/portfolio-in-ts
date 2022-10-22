import { Row, Col } from "react-bootstrap";
import SectionTitle from "../section-titles/section-titles.components";
import Container from "../containers/container.component";
import SocialIconSet from "./social-icon-set.component";
import ContainerBoxed from "../containers/container-boxed.component";

const HireSection = () => {
  return (
    <Container
      id="HireMeSection"
      className="flex-center"
      style={{ minHeight: "100vh" }}
      bg={`linear-gradient(272deg, rgba(67, 206, 162, 0.7) 0%, 
      rgba(24, 90, 157, 0.9))`}
      img={`${process.env.REACT_APP_ASSET_URL}/images/hirebg.jpeg`}
      fluid
    >
      <ContainerBoxed borderColor="#FFF">
        <SectionTitle
          title="I'm looking for a job"
          subTitle="Get in Touch"
          variant="white"
        />
        <Row className="pt-4">
          <Col className="display__flex-center display__sm-block">
            <SocialIconSet />
          </Col>
        </Row>
      </ContainerBoxed>
    </Container>
  );
};

export default HireSection;
