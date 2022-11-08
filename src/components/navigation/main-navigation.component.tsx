import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { scroller } from "react-scroll";

import {
  StyledMainNav,
  StyledMainNavButton,
  StyledMainNavContainer,
  StyledMainNavList,
  StyledMainNavListItem,
} from "./main-navigation.styles";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { useAppSelector } from "../../store/hooks/typedhooks";
import { uiIsMobile } from "../../store/ui/ui-selector";

const MainNavigation = () => {
  const isMobile = useAppSelector(uiIsMobile);
  const [toggleNav, setToggleNav] = useState<boolean>(false);
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
        {isMobile && (
          <StyledMainNavButton onClick={() => setToggleNav(!toggleNav)}>
            <BiMenu />
          </StyledMainNavButton>
        )}
        <StyledMainNavList>
          {(!isMobile || (isMobile && toggleNav)) && (
            <>
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
                <Link
                  to="/"
                  onClick={onClickSetHistory.bind(null, "WorksSection")}
                >
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
            </>
          )}
        </StyledMainNavList>
      </StyledMainNavContainer>
    </StyledMainNav>
  );
};

export default MainNavigation;
