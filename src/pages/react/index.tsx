import { useCallback, useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks/typedhooks";

import Container from "../../components/containers/container.component";
import useHttp from "../../components/hooks/usehttp";

import ReactIntroduction from "./introduction";
import TopicComponent from "./topic-component";
import Text from "../../components/typography/text.component";
import {
  FONT_SIZE_AS,
  TEXT_COLOR,
  H_PADDING,
  TEXT_AS,
} from "../../components/theme-provider/utilities";
import GapSeparator from "../../components/gap/gap.components";
import List, { ListItem } from "../../components/list/list.component";
import FlexChildContainer from "../../components/containers/flex-child-container.component";

type TopicsType = {
  id: string;
  title: string;
  topics: {
    topic_id: string;
    path: string;
    topicTitle: string;
  }[];
};

const ReactPage = () => {
  const { sendRequest } = useHttp();
  const [reactProcess, setReactProcess] = useState<TopicsType[]>([]);

  const setTopicsCallback = (data: TopicsType[]) => {
    setReactProcess(data);
  };

  const sendRequestCallback = useCallback(() => {
    const requestConfig = {
      url: `./react-process.json`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    sendRequest(requestConfig, setTopicsCallback);
  }, [sendRequest]);

  const dispatch = useAppDispatch();
  useEffect(() => {
    //dispatch(fetchSkillsData()); //Activate Redux, currently using ContextAPI
    sendRequestCallback();
  }, [sendRequestCallback, dispatch]);

  const links =
    reactProcess &&
    reactProcess.length > 0 &&
    reactProcess.map((e: TopicsType) => {
      return (
        <li key={e.id}>
          <Text
            as={TEXT_AS.H3}
            fontSizeAs={FONT_SIZE_AS.H5}
            textColor={TEXT_COLOR.PRIMARY}
          >
            {e.title}
          </Text>
          <List>
            {e.topics &&
              e.topics.map((topicItem) => {
                return (
                  <ListItem key={topicItem.topic_id}>
                    <NavLink to={topicItem.path}>
                      {topicItem.topicTitle}
                    </NavLink>
                  </ListItem>
                );
              })}
          </List>
        </li>
      );
    });

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  // const validRouteLinks = reactProcess && reactProcess.length > 0 ? reactProcess
  //     .map((e) => e.topics)[0]
  //     .reduce((acc, curr) => {
  //       return acc.concat(curr.path);
  //     }, []) : "";
  //const validRouteLinks =: [""];
  //console.log(validRouteLinks);

  let validLinks;
  if (reactProcess && reactProcess.length > 0) {
    validLinks = reactProcess
      .map((e: TopicsType) => {
        return e.topics.reduce(
          (acc, curr) => acc.concat(curr.path),
          [] as string[]
        );
      })
      .flat(1);
  }
  console.log(validLinks);
  return (
    <>
      <GapSeparator size={"lg"} />
      <Container fluid hPadding={H_PADDING.SM} flex>
        <FlexChildContainer flexBasis="68%">
          <Container as="article" flex gap="10%" childFlexBasis="80%">
            <Container>
              <Routes>
                <Route path="/" element={<ReactIntroduction />} />
                <Route
                  path=":foldername/:filename"
                  element={<TopicComponent links={validLinks} />}
                />
              </Routes>
            </Container>
          </Container>
        </FlexChildContainer>
        <FlexChildContainer flexBasis="29%">
          <Container as="article">
            <List>{links}</List>
          </Container>
        </FlexChildContainer>
      </Container>
    </>
  );
};

export default ReactPage;
