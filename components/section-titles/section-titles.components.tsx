import StyledSectionTitle from "./section-titles.styles";

type SectionTitleProps = {
  title: string;
  subTitle?: string;
  content?: string;
  textAlign?: "left" | "center" | "right";
  variant?: "primary" | "secondary" | "white";
};
const SectionTitle = ({
  title,
  subTitle,
  content,
  textAlign = "center",
  variant = "primary",
}: SectionTitleProps) => {
  return (
    <StyledSectionTitle textAlign={textAlign} variant={variant}>
      <h3>{title}</h3>
      {subTitle && <h4>{subTitle}</h4>}
      {content && <p>{content}</p>}
    </StyledSectionTitle>
  );
};

export default SectionTitle;
