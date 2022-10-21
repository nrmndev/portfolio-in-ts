import { Col, Row } from "react-bootstrap";

const Preloader = () => {
  return (
    <div>
      <Col md={{ span: 6, offset: 3 }}>
        <div className="skeleton skeleton__circle-center"></div>
        <div className="skeleton skeleton__line"></div>
        <div className="skeleton skeleton__line-small"></div>
        <div className="skeleton skeleton__line"></div>
      </Col>
      {/* <Col xs={4} md={4} sm={4} lg={4}>
        <div className="skeleton skeleton__line"></div>
      </Col> */}
      <Col xs={12}>
        <Row>
          <Col xs={4} md={4} sm={4} lg={4}>
            <div className="skeleton skeleton__line-card"></div>
          </Col>
          <Col xs={4} md={4} sm={4} lg={4}>
            <div className="skeleton skeleton__line-card"></div>
          </Col>
          <Col xs={4} md={4} sm={4} lg={4}>
            <div className="skeleton skeleton__line-card"></div>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default Preloader;
