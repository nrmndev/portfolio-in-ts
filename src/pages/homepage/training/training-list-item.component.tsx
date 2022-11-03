import { FaAward } from "react-icons/fa";
import { BsArrowRight, BsJournalCheck, BsPencil } from "react-icons/bs";
import Card from "../../../components/card/card.component";
import Button from "../../../components/button/button.component";
import Badge from "../../../components/badge/badge-icon.component";
import Text from "../../../components/typography/text.component";
import { TrainingType } from "../../../store/data/data-types";
import {
  BUTTON_VARIANT,
  TEXT_AS,
  CARD_VARIANT,
  TEXT_COLOR,
} from "../../../components/theme-provider/utilities";

type Props = {
  data: TrainingType;
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
      <Card variant={CARD_VARIANT.WITHSHADOW} bgGradientOnHover>
        <Badge icon={badge} title={status} color={TEXT_COLOR.PRIMARY} />
        <Text as={TEXT_AS.H3} className="mt-5">
          {title}
        </Text>
        <Text as={TEXT_AS.P}>{description}</Text>
        <Button
          onClick={props.onClick.bind(null, id)}
          variant={BUTTON_VARIANT.gradient}
        >
          See course outline
          <BsArrowRight size={"1em"} />
        </Button>
      </Card>
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
//     variant={BUTTON_VARIANT.icon}
//   >
//     <span>
//       <BsArrowRight size={"1em"} />
//       See course outline
//     </span>
//   </Button>
// </Cards>
// console.log(id);
// const isActive = useAppSelector(uiIsMessageActive);
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
