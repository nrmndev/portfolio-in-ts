import Container from "../../../components/containers/container.component";
import Image, { IMAGE_ALIGN } from "../../../components/image/image.component";
import {
  IMAGE_VARIANT,
  TEXT_AS,
} from "../../../components/theme-provider/utilities";
import Text from "../../../components/typography/text.component";

type CompanyProps = {
  data: {
    image: string;
    company: string;
    tenureship: string;
    jobposition: string;
  };
};

const CompanyContainer = ({ data }: CompanyProps) => {
  const { image, company, tenureship, jobposition } = data;
  return (
    <Container flex lg={3} md={3} sm={12} bg="none">
      <Image
        src={`${process.env.REACT_APP_ASSET_URL}/images/${image}`}
        width={225}
        height={107}
        variant={IMAGE_VARIANT.BASE}
        align={IMAGE_ALIGN.CENTER}
      />
      <Text as={TEXT_AS.H4} label="Company">
        {company}
      </Text>
      <Text as={TEXT_AS.H4} label="Position">
        {jobposition}
      </Text>
      <Text as={TEXT_AS.H4} label="Tenureship">
        {tenureship}
      </Text>
    </Container>
  );
};

export default CompanyContainer;
