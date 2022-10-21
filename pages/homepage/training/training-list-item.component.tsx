import { Col } from "react-bootstrap";
import { FaAward } from "react-icons/fa";
import { BsArrowRight, BsJournalCheck, BsPencil } from "react-icons/bs";
import Card, { CARD_VARIANTS } from "../../../components/card/card.component";
import Button, {
  BUTTON_VARIANTS,
} from "../../../components/button/button.component";
import Badge from "../../../components/badge/badge.component";
import Text, {
  TEXT_VARIANTS,
} from "../../../components/typography/text.component";
//import Cards from "../../../components/cards/cards.component";

export type TrainingData = {
  id: string;
  title: string;
  description: string;
  message: string;
  status: string;
  courseHighlights: string[];
  linkToCertificate: string;
};

type Props = {
  data: TrainingData;
  onMouseEventHandler: (
    item: string,
    e: React.MouseEvent<HTMLDivElement>
  ) => void;
  children?: React.ReactNode;
  onClick: (id: string) => void;
};
const TrainingListItem = (props: Props) => {
  const { id, title, description, status } = props.data;

  let badge = <></>;
  switch (status) {
    case "Completed":
      badge = <FaAward size={30} />;
      break;
    case "Ongoing":
      badge = <BsPencil size={30} />;
      break;
    case "Scheduled":
      badge = <BsJournalCheck size={30} />;
      break;
    default:
      badge = <FaAward size={30} />;
      break;
  }

  return (
    <>
      <Col sm={12} md={6} lg={6} className="mb-4 mb-md-5" id={`training-${id}`}>
        <Card variant={CARD_VARIANTS.WITHSHADOW}>
          <Badge icon={badge} title={status} color="#43cea2" />
          <Text value={title} as={TEXT_VARIANTS.H3} className="mt-5" />
          <Text value={description} as={TEXT_VARIANTS.P} />
          <Button
            onClick={props.onClick.bind(null, id)}
            variant={BUTTON_VARIANTS.icon}
          >
            <span>
              <BsArrowRight size={"1em"} />
              See course outline
            </span>
          </Button>
        </Card>
      </Col>
    </>
  );
};

export default TrainingListItem;

//   <Cards
//   title={title}
//   content={description}
//   textAlign="center"
//   beforeTitle={<Badge icon={badge} title={status} color="#43cea2" />}
// >
//   <Button
//     onClick={props.onClick.bind(null, id)}
//     variant={BUTTON_VARIANTS.icon}
//   >
//     <span>
//       <BsArrowRight size={"1em"} />
//       See course outline
//     </span>
//   </Button>
// </Cards>
// console.log(id);
// const isActive = useAppSelector(
//   (state: RootState) => state.ui.isMessageActive
// );
//const propsPassedID = useCheckInViewById(props.id);
//<div className="card2">
//   <div className="card2__content">
//     <span style={{ color: "#43cea2" }}>
//       {badge} {"  "}
//       {props.status}
//     </span>

//     <h3 className="text-center mt-3 color_2">{props.title}</h3>
//     <p className="text-center color_1">{props.description}</p>
//     <button
//       className="button__flat"
//       onClick={props.onClick.bind(null, props.trainingID)}
//     >
//       <span>
//         <BsArrowRight size={"2em"} />
//         See course outline
//       </span>
//     </button>
//   </div>
// </div>
