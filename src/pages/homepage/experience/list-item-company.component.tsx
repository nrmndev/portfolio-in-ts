import Image, {
  IMAGE_ALIGN,
  IMAGE_VARIANTS,
} from "../../../components/image/image.component";
import Text, {
  TEXT_VARIANTS,
} from "../../../components/typography/text.component";

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
    <>
      <Image
        src={`${process.env.REACT_APP_ASSET_URL}/images/${image}`}
        width={225}
        height={107}
        variant={IMAGE_VARIANTS.BASE}
        align={IMAGE_ALIGN.CENTER}
      />
      <Text as={TEXT_VARIANTS.H4} label="Company">
        {company}
      </Text>
      <Text as={TEXT_VARIANTS.H4} label="Position">
        {jobposition}
      </Text>
      <Text as={TEXT_VARIANTS.H4} label="Tenureship">
        {tenureship}
      </Text>
    </>
  );
};

export default CompanyContainer;
