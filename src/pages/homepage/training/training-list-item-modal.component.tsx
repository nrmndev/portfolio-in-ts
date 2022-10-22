import Button, {
  BUTTON_VARIANTS,
} from "../../../components/button/button.component";
import List from "../../../components/list/list.component";
import { TrainingData } from "./training-list-item.component";

interface TrainingListItemModalProps {
  data: TrainingData;
}
const TrainingListItemModal = (props: TrainingListItemModalProps) => {
  const { title, description, status, linkToCertificate, courseHighlights } =
    props.data;
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
            size="sm"
            variant={BUTTON_VARIANTS.inverted}
          >
            View Certificate
          </Button>
        )}
      </p>

      <hr />
      <h4 className="h5">Course Outline</h4>
      <List listItems={courseHighlights} />
    </>
  );
};

export default TrainingListItemModal;
