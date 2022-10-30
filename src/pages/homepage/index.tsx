import {
  //uiClearMessage,
  uiSetCardBackdrop,
  uiUpdateMessage,
} from "../../store/ui/ui-actions";
import { useAppDispatch, useAppSelector } from "../../store/hooks/typedhooks";
import TopBanner from "./about/topbanner";
import TrainingList from "./training/training-list.component";
import SkillsList from "./skills/skills-list";
import ExperienceList from "./experience/experience-list";

import { dataGetData } from "../../store/data/data-selector";
import PortfolioList from "./portfolio/portfolio-list";
import AboutSection from "./about/about.component";
//import { fetchSkillsData } from "../../store/data/data-actions";

const HomePage = () => {
  const dataState = useAppSelector(dataGetData);

  const dispatch = useAppDispatch();

  const onMouseEventHandler = (
    item: string,
    e: React.MouseEvent<HTMLElement>
  ) => {
    switch (e.type) {
      case "mouseenter":
        dispatch(uiUpdateMessage(item));
        //dispatch(uiSetCardBackdrop(true));
        break;
      case "mouseleave":
        //dispatch(uiClearMessage());
        //dispatch(uiSetCardBackdrop(false));
        break;
      default:
        break;
    }
  };
  const skillJSX = dataState ? <SkillsList data={dataState.skills} /> : <></>;

  const experienceJSX = dataState ? (
    <ExperienceList data={dataState.experiences} />
  ) : (
    <></>
  );

  const trainingJSX = dataState ? (
    <TrainingList
      data={dataState.trainings}
      onMouseEventHandler={onMouseEventHandler}
    />
  ) : (
    <></>
  );
  const portfolioJSX = dataState ? (
    <PortfolioList data={dataState.portfolio} />
  ) : (
    <></>
  );
  return (
    <>
      {/* <TopBanner /> */}
      <AboutSection />
      {skillJSX}
      {portfolioJSX}
      {experienceJSX}
      {trainingJSX}
    </>
  );
};

export default HomePage;
