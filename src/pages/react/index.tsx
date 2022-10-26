import { useCallback, useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks/typedhooks";

import useHttp from "../../components/hooks/usehttp";
import { Container, Row } from "react-bootstrap";
import { BiChevronRight } from "react-icons/bi";
import ReactIntroduction from "./introduction";
import TopicComponent from "./topic-component";

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
          <h3 className="h4 mt-2">{e.title}</h3>
          <ul>
            {e.topics &&
              e.topics.map((topicItem) => {
                return (
                  <li key={topicItem.topic_id}>
                    <NavLink to={topicItem.path}>
                      <BiChevronRight />
                      {topicItem.topicTitle}
                    </NavLink>
                  </li>
                );
              })}
          </ul>
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
      {
        <Container className="pt-5 pb-5">
          <h2 className="color_filled text__center font__h1 pt-5">
            ReactJS Skills Process
          </h2>
          <Row>
            <article className="col-xs-12 col-sm-8">
              <Routes>
                <Route path="/" element={<ReactIntroduction />} />
                <Route
                  path=":foldername/:filename"
                  element={<TopicComponent links={validLinks} />}
                />
              </Routes>
            </article>
            <aside className="col-xs-12 col-sm-4 scroll-y">
              <ul className="nav d-block">{links}</ul>
            </aside>
          </Row>
        </Container>
      }
    </>
  );
};

export default ReactPage;
