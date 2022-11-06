import Button from "../../../components/button/button.component";
import List, { ListItem } from "../../../components/list/list.component";
import {
  BUTTON_SIZE,
  BUTTON_VARIANT,
} from "../../../components/theme-provider/utilities";
import { UTIL_TEXT_AS } from "../../../components/theme-provider/utilities/typography";
import Text from "../../../components/typography/text.component";
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
      <Text as={UTIL_TEXT_AS.H3}>{title}</Text>
      <Text>{description}</Text>
      <Text>Status: {status}</Text>
      <Text>
        {status === "Completed" && (
          <Button
            as="a"
            href={linkToCertificate}
            target="_blank"
            rel="noreferrer"
            size={BUTTON_SIZE.SM}
            variant={BUTTON_VARIANT.gradient}
          >
            View Certificate
          </Button>
        )}
      </Text>

      <hr />
      <Text as={UTIL_TEXT_AS.H4}>Course Outline</Text>

      <List>
        {courseHighlights.map((highlight) => {
          return <ListItem key={highlight}>{highlight}</ListItem>;
        })}
      </List>
    </>
  );
};

export default TrainingListItemModal;
