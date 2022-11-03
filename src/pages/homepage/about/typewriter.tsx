import { useEffect, useState } from "react";
import {
  FONT_SIZE_AS,
  TEXT_AS,
} from "../../../components/theme-provider/utilities";
import Text from "../../../components/typography/text.component";
import { StyledSpan } from "./typewriter-span.style";

const TopBannerForm = () => {
  const [skillsTypewritten, setSkillsTypewritten] = useState<
    [{ text1: string; text2: string }]
  >([{ text1: "I am", text2: "Front End Developer" }]);
  //   const [selectedReactOption, setSelectedReactOption] = useState<string>("1");

  //   const onChangeExpertise = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //     setSelectedReactOption(e.currentTarget.value);
  //   };
  const cb = (curr: number) => {
    switch (curr) {
      case 0:
        setSkillsTypewritten([{ text1: "I Specialize on", text2: "React" }]);
        return;
      case 1:
        setSkillsTypewritten([{ text1: "I know", text2: "TypeScript" }]);
        return;
      case 2:
        setSkillsTypewritten([{ text1: "I know", text2: "Redux" }]);
        return;
      case 3:
        setSkillsTypewritten([{ text1: "I know", text2: "React Router" }]);
        return;
      case 4:
        setSkillsTypewritten([{ text1: "I know", text2: "CSS in JS" }]);
        return;
      case 5:
        setSkillsTypewritten([{ text1: "I know", text2: "Jest & RTL" }]);
        return;
      default:
        break;
    }
  };

  useEffect(() => {
    let i = 1;
    const changeSelectValue = setInterval(function () {
      cb(i);
      i++;
      if (i === 6) {
        i = 0;
      }
    }, 3000);
    return () => {
      clearInterval(changeSelectValue);
    };
  }, []);

  return (
    <>
      {skillsTypewritten.map(({ text1, text2 }, index) => {
        return (
          <Text
            as={TEXT_AS.H1}
            key={index}
            fontSizeAs={FONT_SIZE_AS.H2}
            style={{ position: "relative" }}
          >
            {text1} <StyledSpan>{text2}</StyledSpan>
          </Text>
        );
      })}
    </>
  );
};

export default TopBannerForm;
