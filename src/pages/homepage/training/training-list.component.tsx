import { useState } from "react";

import { useAppDispatch } from "../../../store/hooks/typedhooks";
import { uiActions } from "../../../store/ui/ui-slice";
import { TrainingType } from "../../../store/data/data-types";

import { Col, Row } from "react-bootstrap";
import Modal from "../../../components/modal/modal.component";
import NotFound from "../../../components/error/notfound.component";
import TrainingListItem from "./training-list-item.component";
import TrainingListItemModal from "./training-list-item-modal.component";
import SectionTitle, {
  TITLE_VARIANTS,
} from "../../../components/section-titles/section-titles.components";
import Container from "../../../components/containers/container.component";
import GapSeparator, {
  SEPARATOR_VARIANTS,
} from "../../../components/gap/gap.components";
import Text, {
  TEXT_VARIANTS,
} from "../../../components/typography/text.component";
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
    <Container id="TrainingSection" fluid as="section">
      <Container id="training_heading">
        <GapSeparator variant={SEPARATOR_VARIANTS.LINE} size="lg" />
        {/* <Text as={TEXT_VARIANTS.H4}>Keeping track of technology</Text>
        <Text as={TEXT_VARIANTS.H3}>Training Path</Text> */}
        <SectionTitle
          title="Training Path"
          subTitle="Keeping track of technology"
          subTitleVariant={TITLE_VARIANTS.BACKGROUNDCLIP}
        />

        <Container flex childFlexBasis="48%" gap="4%">
          {TrainingJSX}
        </Container>
      </Container>
      <Modal show={modalShow} onClose={hideItemHandler}>
        <TrainingListItemModal data={dataInModal} />
      </Modal>
    </Container>
  );
};

export default TrainingList;
