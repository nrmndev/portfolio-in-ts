import { useState } from "react";

import { useAppDispatch } from "../../../store/hooks/typedhooks";
import { uiActions } from "../../../store/ui/ui-slice";
import { TrainingType } from "../../../store/data/data-types";

import { Col, Row } from "react-bootstrap";
import Modal from "../../../components/modal/modal.component";
import NotFound from "../../../components/error/notfound.component";
import TrainingListItem from "./training-list-item.component";
import TrainingListItemModal from "./training-list-item-modal.component";
import SectionTitle from "../../../components/section-titles/section-titles.components";
import Container from "../../../components/containers/container.component";
//import useCheckInViewById from "../../../components/hooks/useCheckInViewById";

type Props = {
  onMouseEventHandler: (item: string, e: React.MouseEvent<HTMLElement>) => void;
  data: TrainingType[];
};

const TrainingList = (props: Props) => {
  const dispatch = useAppDispatch();
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [dataInModal, setDataInModal] = useState<TrainingType>(
    {} as TrainingType
  );
  const hideItemHandler = () => {
    dispatch(uiActions.setModalActive(false));
    setModalShow(false);
    const body = document.querySelector("body");
    if (body) {
      body.classList.remove("open");
    }
  };

  /****** EVENT HANDLING ******/
  /* PASS ON TO PARENT HOC FOR LOGIC */
  const onMouseEventHandler = (
    item: string,
    e: React.MouseEvent<HTMLElement>
  ) => {
    props.onMouseEventHandler(item, e);
  };

  const showCourseModal = (id: string) => {
    const currentData = props.data.find((item: TrainingType) => item.id === id);
    if (currentData) {
      setDataInModal(currentData);
    }
    setModalShow(true);
    const body = document.querySelector("body");
    if (body) {
      body.classList.add("open");
    }
    //dispatch(uiActions.setModalActive(true));
  };

  //const isTrainingSectionInView = useCheckInViewById("training_heading");
  //const isTrainingListInView = useCheckInViewById("training_list");
  /****** COMPONENT RENDERING *****/
  let TrainingJSX: JSX.Element[] | JSX.Element = (
    <NotFound text="No Trainings List Found" />
  );
  if (props.data.length > 1) {
    TrainingJSX = props.data.map((training: TrainingType) => {
      return (
        <TrainingListItem
          key={training.id}
          data={training}
          onMouseEventHandler={onMouseEventHandler}
          onClick={showCourseModal}
        />
      );
    });
  }

  return (
    <Container id="TrainingSection" fluid as="section" bg="#fafafa">
      <Container id="training_heading">
        <Row className="mb-5 z-2 pt-5">
          <Col xs={12} style={{ minHeight: "20vh" }}>
            <SectionTitle
              title="Training Path"
              subTitle="Keeping track of technology"
              content="In a field that's constantly evolving, I'm always looking for
                ways to improve"
            />
          </Col>
        </Row>

        <Row id="training_list">{TrainingJSX}</Row>
      </Container>
      <Modal show={modalShow} onClose={hideItemHandler}>
        <TrainingListItemModal data={dataInModal} />
      </Modal>
    </Container>
  );
};

export default TrainingList;
