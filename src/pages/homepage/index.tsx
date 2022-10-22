import TopBanner from "./about/topbanner";
import React, { useCallback, useEffect, useState } from "react";
import { uiActions } from "../../store/ui-slice";
import { useAppDispatch } from "../../store/hooks/typedhooks";
import TrainingList from "./training/training-list.component";
import SkillsList from "./skills/skills-list";
import { MouseEventType } from "../../utils/interfaces/interfaces";
import useHttp from "../../components/hooks/usehttp";
import ExperienceList from "./experience/experience-list";
import Preloader from "../../components/preloader/loading";
import FetchError from "../../components/error/fetch-error";

const HomePage = () => {
  const {
    isLoading,
    error,
    sendRequest: sendTaskRequest,
    responseStatus,
  } = useHttp();
  const [skillState, setSkillState] = useState<any>();
  // console.log(skillState);
  // console.log(error);
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
  const onClickHandler = (
    id: number,
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    dispatch(uiActions.setModalActive(true));
  };

  const onMouseEventHandler = (
    item: string,
    e: React.MouseEvent<HTMLElement>
  ) => {
    switch (e.type) {
      case MouseEventType.MOUSE_ENTER:
        dispatch(uiActions.setMessage(item));
        dispatch(uiActions.setCardBackdrop(true));
        break;
      case MouseEventType.MOUSE_LEAVE:
        dispatch(uiActions.setCardBackdrop(false));
        dispatch(uiActions.setMessage(""));
        break;
      default:
        break;
    }
  };

  return (
    <>
      <TopBanner />
      {isLoading && <Preloader />}
      {error && <FetchError error={responseStatus} />}
      {skillState && (
        <>
          <SkillsList
            //onMouseEventHandler={onMouseEventHandler}
            data={skillState[0].skills}
          />
          <ExperienceList data={skillState[0].experiences} />
          <TrainingList
            onMouseEventHandler={onMouseEventHandler}
            data={skillState[0].trainings}
          />
        </>
      )}
    </>
  );
};

export default HomePage;
