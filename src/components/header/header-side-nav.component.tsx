import { StaticMessages } from "../../utils/interfaces/interfaces";
import SideNav from "./header-side-nav.styles";
import NavListItem from "./side-nav-list-item.component";
const SideNavList = () => {
  return (
    <SideNav className="sideNav">
      <NavListItem
        title="Skills"
        to="SkillsSection"
        message={StaticMessages.SKILLS}
      />
      <NavListItem
        title="Work"
        to="WorksSection"
        message={StaticMessages.WORK}
      />
      <NavListItem
        title="Training"
        to="TrainingSection"
        message={StaticMessages.TRAINING}
      />
      <NavListItem
        title="Contact"
        to="HireMeSection"
        message={StaticMessages.CONTACT}
      />
    </SideNav>
  );
};

export default SideNavList;
