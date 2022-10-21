import { Container, Row } from "react-bootstrap";
import { Routes, Route, NavLink } from "react-router-dom";
import TopicComponent from "./topic-component";
import { BiChevronRight } from "react-icons/bi";
import React, { useEffect } from "react";
import ReactIntroduction from "./introduction";

const DUMMY_LINKS = [
  {
    id: "1",
    title: "React Hooks",
    topics: [
      {
        topicTitle: "useState",
        path: "usestate",
        component: "usestate",
      },
      {
        topicTitle: "useEffect",
        path: "useeffect",
        component: "useeffect",
      },
      {
        topicTitle: "useRef",
        path: "useref",
        component: "useref",
      },
      {
        topicTitle: "useContext",
        path: "usecontext",
        component: "usecontext",
      },
      {
        topicTitle: "useCallback",
        path: "usecallback",
        component: "usecallback",
      },
      {
        topicTitle: "useMemo",
        path: "usememo",
        component: "usememo",
      },

      {
        topicTitle: "useImperativeHandle",
        path: "useimperativehandle",
        component: "useimperativehandle",
      },
      {
        topicTitle: "useReducer",
        path: "usereducer",
        component: "usereducer",
      },
      {
        topicTitle: "customhook",
        path: "customhook",
        component: "customhook",
      },
    ],
  },
  {
    id: "8",
    title: "React Router",
    topics: [
      {
        topicTitle: "Browser Router, Routes, Route",
        path: "react-router",
      },
      {
        topicTitle: "Route Guards",
        path: "react-createportal",
      },
    ],
  },

  {
    id: "2",
    title: "React Redux",
    topics: [
      {
        topicTitle: "Create Slice and Configure Store",
        path: "reduxcreateslice-configurestore",
      },
      { topicTitle: "Action Creators", path: "reduxactioncreators" },
      { topicTitle: "Typed Use Selectors", path: "reduxtypedusedselector" },
    ],
  },
  {
    id: "7",
    title: "Design Patterns",
    topics: [
      { topicTitle: "Higher Order Components", path: "designpattern-hoc" },
      {
        topicTitle: "Presentational vs Functional Component",
        path: "designpattern-presentational",
      },
      { topicTitle: "Provider Pattern", path: "designpattern-provider" },
      {
        topicTitle: "Conditional Rendering (Ternary Operator)",
        path: "designpattern-conditional",
      },
      {
        topicTitle: "Variant Components",
        path: "designpattern-variant",
      },
    ],
  },
  {
    id: "8",
    title: "Testing",
    topics: [
      { topicTitle: "Jest", path: "testing-jest" },
      {
        topicTitle: "React Testing Library",
        path: "testing-rtl",
      },
    ],
  },
  {
    id: "8",
    title: "Next JS",
    topics: [
      {
        topicTitle: "Server Side Rendering",
        path: "nextjs",
      },
    ],
  },

  {
    id: "6",
    title: "Code Base / Custom Utilities",
    topics: [
      { topicTitle: "Data Fetching", path: "codebase-fetching" },
      { topicTitle: "Data Pagination", path: "codebase-pagination" },
      { topicTitle: "Debouncing", path: "codebase-debouncing" },
      { topicTitle: "Authentication", path: "codebase-authentication" },
      { topicTitle: "Authorization", path: "codebase-authorization" },
      { topicTitle: "Form Validation", path: "codebase-formvalidation" },
      { topicTitle: "Create Portal", path: "codebase-createportal" },
      {
        topicTitle: "Local Storage and Session Storage",
        path: "codebase-storage",
      },
      {
        topicTitle: "Viewport (Responsive) Conditional Rendering",
        path: "codebase-viewport",
      },
    ],
  },

  {
    id: "9",
    title: "CSS Design Patterns",
    topics: [
      { topicTitle: "Module Based CSS", path: "css-modulebased" },
      {
        topicTitle: "Dynamic JS CSS",
        path: "css-dynamicjs",
      },
      {
        topicTitle: "Styled Components",
        path: "css-styledcomponents",
      },
      {
        topicTitle: "Theming SCSS/LESS",
        path: "css-theming-sass",
      },
      {
        topicTitle: "React Transition Group",
        path: "css-rtg",
      },
    ],
  },
  {
    id: "5",
    title: "Event Handlers",
    topics: [
      { topicTitle: "HTML Form Events", path: "eventhandler-form" },
      { topicTitle: "HTML Mouse Events", path: "eventhandler-mouse" },
    ],
  },
];

const ReactPage = () => {
  const links = DUMMY_LINKS.map((e, i) => {
    return (
      <li key={i}>
        <h3 className="h4 mt-2">{e.title}</h3>
        <ul>
          {e.topics.map((t, i) => {
            return (
              <li key={i}>
                <NavLink to={t.path}>
                  <BiChevronRight />
                  {t.topicTitle}
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
                <Route path=":filename" element={<TopicComponent />} />
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
