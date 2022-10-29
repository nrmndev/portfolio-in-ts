import { useEffect, useRef, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { scroller } from "react-scroll";
import CSSTransitionWrapper from "../../../components/hooks/useCssTransition";
import { AnimationTypes } from "../../../components/hooks/useCssTransition";

const TopBannerForm = () => {
  const [selectedOption, setSelectedOption] = useState<number>(0);
  //   const [selectedReactOption, setSelectedReactOption] = useState<string>("1");
  const dropDownForm = useRef<HTMLSelectElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(Number(e.currentTarget.value));
  };

  //   const onChangeExpertise = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //     setSelectedReactOption(e.currentTarget.value);
  //   };
  const cb = (curr: number) => {
    setSelectedOption(curr);
  };
  const onClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    switch (selectedOption) {
      case 0:
        setTimeout(() => {
          scroller.scrollTo("SkillsSection", {});
        }, 100);
        return;
      case 1:
        setTimeout(() => {
          scroller.scrollTo("WorksSection", {});
        }, 100);
        return;
      case 2:
        setTimeout(() => {
          scroller.scrollTo("TrainingSection", {});
        }, 100);
        return;
      case 3:
        setTimeout(() => {
          scroller.scrollTo("HireMeSection", {});
        }, 100);
        return;
      default:
        break;
    }
    // navigate("/");
    // setTimeout(() => {
    //   scroller.scrollTo(scroll, {});
    // }, 100);
  };
  //     dropDownForm.current!.selectedIndex = i;

  const [aboveTheFoldView, setaboveTheFoldView] = useState(false);

  useEffect(() => {
    setaboveTheFoldView(true);
  }, []);
  useEffect(() => {
    let i = 1;
    const changeSelectValue = setInterval(function () {
      if (dropDownForm.current) {
        dropDownForm.current.selectedIndex = i;
        cb(i);
        i++;
        if (i === 4) {
          i = 0;
        }
      }
    }, 3000);
    return () => {
      clearInterval(changeSelectValue);
    };
  }, []);

  return (
    <>
      <CSSTransitionWrapper
        in={aboveTheFoldView}
        animation={AnimationTypes.LIGHTSPEEDINRIGHT}
      >
        <h3 className="banner-title">
          I am Norman
          <br /> Front End Developer
        </h3>
      </CSSTransitionWrapper>
      <h3 className="banner-subtitle">Know more about my:</h3>
      <Col sm={{ span: 8, offset: 2 }}>
        <Form onSubmit={onClick}>
          <Form.Group className="mb-3 mt-3">
            <select
              onChange={onChange}
              className="banner-select text__center"
              ref={dropDownForm}
            >
              <option value="0">React Expertise</option>
              <option value="1">Work Experience</option>
              <option value="2">Trainings and Certificates</option>
              <option value="3">Contact details</option>
            </select>
          </Form.Group>
          {/* <Form.Group className="mb-3 mt-3">
          {selectedOption === 3 && (
            <select onChange={onChangeExpertise} className={styles.select}>
              <option value="1">View React Code Base</option>
              <option value="2">View Sample Store App</option>
              <option value="3">View Sample Administration App</option>
            </select>
          )}
        </Form.Group> */}
          <Form.Group className="mb-3 mt-3 d-grid">
            <button className="banner-button">Check it out</button>
          </Form.Group>
        </Form>
      </Col>
    </>
  );
};

export default TopBannerForm;
