import Button from "../../../components/button/button.component";
import List, { ListItem } from "../../../components/list/list.component";
import {
  BUTTON_SIZE,
  BUTTON_VARIANT,
} from "../../../components/theme-provider/utilities";
import { TrainingType } from "../../../store/data/data-types";
//import { TrainingData } from "./training-list-item.component";

interface TrainingListItemModalProps {
  data: TrainingType;
}
const TrainingListItemModal = ({ data }: TrainingListItemModalProps) => {
  const { title, description, status, linkToCertificate, courseHighlights } =
    data;
  return (
    <>
      <h3 className="color__primary">{title}</h3>
      <p className="mb-0 mt-0">{description}</p>
      <p>Status: {status}</p>
      <p>
        {status === "Completed" && (
          <Button
            href={linkToCertificate}
            target="_blank"
            rel="noreferrer"
            size={BUTTON_SIZE.SM}
            variant={BUTTON_VARIANT.inverted}
          >
            View Certificate
          </Button>
        )}
      </p>

      <hr />
      <h4 className="h5">Course Outline</h4>

      <List>
        {courseHighlights.map((highlight) => {
          return <ListItem key={highlight}>{highlight}</ListItem>;
        })}
      </List>
    </>
  );
};

export default TrainingListItemModal;
