import { StaticMessages } from "../../utils/interfaces/interfaces";
import {
  StyledSideNavDrawer,
  StyledSideNavDrawerList,
} from "./side-nav-drawer.styles";
import NavListItem from "./side-nav-list-item.component";
import { GoChecklist } from "react-icons/go";
import { MdWorkOutline } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { MdContacts } from "react-icons/md";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const SideNavDrawer = () => {
  return (
    <StyledSideNavDrawer>
      <StyledSideNavDrawerList>
        <NavListItem
          title="Skills"
          to="SkillsSection"
          message={StaticMessages.SKILLS}
          icon={<GoChecklist />}
        />
        <NavListItem
          title="Portfolio"
          to="PortfolioSection"
          message={StaticMessages.SKILLS}
          icon={<FaGlobe />}
        />
        <NavListItem
          title="Work"
          to="WorksSection"
          message={StaticMessages.WORK}
          icon={<MdWorkOutline />}
        />
        <NavListItem
          title="Training"
          to="TrainingSection"
          message={StaticMessages.TRAINING}
          icon={<TbCertificate />}
        />
        <NavListItem
          title="Contact"
          to="HireMeSection"
          message={StaticMessages.CONTACT}
          icon={<MdContacts />}
        />

        <NavListItem
          title="To Top"
          to="top"
          message={StaticMessages.CONTACT}
          icon={<BsFillArrowUpCircleFill />}
        />
      </StyledSideNavDrawerList>
    </StyledSideNavDrawer>
  );
};

export default SideNavDrawer;
