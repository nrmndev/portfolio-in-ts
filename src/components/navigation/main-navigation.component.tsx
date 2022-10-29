import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { scroller } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";
import {
  StyledMainNav,
  StyledMainNavContainer,
  StyledMainNavList,
  StyledMainNavListItem,
} from "./main-navigation.styles";

const MainNavigation = () => {
  const navigate = useNavigate();
  const onClickSetHistory = (scroll: string) => {
    navigate("/");
    setTimeout(() => {
      scroller.scrollTo(scroll, {});
    }, 100);
  };

  return (
    <StyledMainNav>
      <StyledMainNavContainer>
        <Navbar.Brand>
          <Link to="/">NGSilvestre</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <StyledMainNavList>
          <StyledMainNavListItem>
            <Link
              to="/"
              onClick={onClickSetHistory.bind(null, "SkillsSection")}
            >
              Skills
            </Link>
          </StyledMainNavListItem>
          <StyledMainNavListItem>
            <Link
              to="/"
              onClick={onClickSetHistory.bind(null, "SkillsSection")}
            >
              Portfolio
            </Link>
          </StyledMainNavListItem>
          <StyledMainNavListItem>
            <Link to="/" onClick={onClickSetHistory.bind(null, "WorksSection")}>
              Employment
            </Link>
          </StyledMainNavListItem>
          <StyledMainNavListItem>
            <Link
              to="/"
              onClick={onClickSetHistory.bind(null, "TrainingSection")}
            >
              Training
            </Link>
          </StyledMainNavListItem>

          <StyledMainNavListItem>
            <Link
              to="/"
              onClick={onClickSetHistory.bind(null, "HireMeSection")}
            >
              Contact
            </Link>
          </StyledMainNavListItem>
        </StyledMainNavList>
      </StyledMainNavContainer>
    </StyledMainNav>
  );
};

export default MainNavigation;
