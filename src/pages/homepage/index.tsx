import React, { useCallback, useEffect, useState } from "react";

import { DataType, InitialValueType } from "../../store/data/data-types";
import { uiSetCardBackdrop, uiSetMessage } from "../../store/ui/ui-actions";
import { useAppDispatch } from "../../store/hooks/typedhooks";

import useHttp from "../../components/hooks/usehttp";
import TopBanner from "./about/topbanner";
import TrainingList from "./training/training-list.component";
import SkillsList from "./skills/skills-list";
import ExperienceList from "./experience/experience-list";
import Preloader from "../../components/preloader/loading";
import FetchError from "../../components/error/fetch-error";
import { MouseEventType } from "../../utils/interfaces/interfaces";

const HomePage = () => {
  const {
    isLoading,
    error,
    sendRequest: sendTaskRequest,
    responseStatus,
  } = useHttp();
  //const [skillState, setSkillState] = useState<IDataType>();
  const [skillState, setSkillState] = useState<DataType>(InitialValueType);
  console.log("data", skillState);
  const setSkillCallback = (data: any) => {
    setSkillState(data);
  };

  const enterTaskHandler = useCallback(() => {
    const requestConfig = {
      url: `./dummy.json`,
      //url: `https://reqres.in/api/users`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: { text: e.currentTarget.value },
    };
    sendTaskRequest(requestConfig, setSkillCallback);
  }, [sendTaskRequest]);
  useEffect(() => {
    enterTaskHandler();
  }, [enterTaskHandler]);

  const dispatch = useAppDispatch();
  // const onClickHandler = (
  //   id: number,
  //   e: React.MouseEvent<HTMLButtonElement>
  // ): void => {
  //   dispatch(uiActions.setModalActive(true));
  // };

  const onMouseEventHandler = (
    item: string,
    e: React.MouseEvent<HTMLElement>
  ) => {
    switch (e.type) {
      case MouseEventType.MOUSE_ENTER:
        dispatch(uiSetMessage(item));
        dispatch(uiSetCardBackdrop(true));
        break;
      case MouseEventType.MOUSE_LEAVE:
        dispatch(uiSetMessage(""));
        dispatch(uiSetCardBackdrop(false));
        break;
      default:
        break;
    }
  };
  const skillJSX = skillState ? <SkillsList data={skillState.skills} /> : <></>;
  const experienceJSX = skillState ? (
    <ExperienceList data={skillState.experiences} />
  ) : (
    <></>
  );
  const trainingJSX = skillState ? (
    <TrainingList
      data={skillState.trainings}
      onMouseEventHandler={onMouseEventHandler}
    />
  ) : (
    <></>
  );

  return (
    <>
      <TopBanner />
      {isLoading && <Preloader />}
      {error && <FetchError error={responseStatus} />}
      {skillJSX}
      {experienceJSX}
      {trainingJSX}
    </>
  );
};

export default HomePage;
