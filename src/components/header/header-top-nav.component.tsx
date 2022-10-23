import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { scroller } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";
const HeaderTopNav = () => {
  const navigate = useNavigate();
  const onClickSetHistory = (scroll: string) => {
    navigate("/");
    setTimeout(() => {
      scroller.scrollTo(scroll, {});
    }, 100);
  };

  return (
    <Navbar expand="lg" className="mt-2">
      <Container>
        <Navbar.Brand>
          <Link to="/">NGSilvestre</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className="me-auto">
            <Link to="/reactjs">Skills</Link>
            <Link
              to="/"
              onClick={onClickSetHistory.bind(null, "TrainingSection")}
            >
              Training
            </Link>
            <Link to="/" onClick={onClickSetHistory.bind(null, "WorksSection")}>
              Work
            </Link>
            <Link
              to="/"
              onClick={onClickSetHistory.bind(null, "HireMeSection")}
            >
              Contact
            </Link>
            {/* <button onClick={onClickSetHistory.bind(null, "TrainingSection")}>
              Training
            </button>
            <button onClick={onClickSetHistory.bind(null, "WorksSection")}>
              Works
            </button>
            <button onClick={onClickSetHistory.bind(null, "HireMeSection")}>
              Contact
            </button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderTopNav;
