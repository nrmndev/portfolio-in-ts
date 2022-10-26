import { dataActions } from "./data-slice";
import { DataInitialValueType } from "./data-types";

export const fetchSkillsData = () => {
  return async (dispatch: any) => {
    debugger;
    const fetchData = async (): Promise<typeof DataInitialValueType> => {
      const response = await fetch("./dummy.json");
      console.log("response", response);

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data: typeof DataInitialValueType = await response.json();
      console.log("storeData", data);
      return data;
    };

    try {
      const skillData = await fetchData();
      //const { skills, experiences, trainings, skillTopics } = skillData;
      // const experiences = skillData[0].experiences;
      // const trainings = skillData[0].trainings;
      // const skillTopics = skillData[0].skillTopics;

      dispatch(dataActions.addData(skillData));
    } catch (error) {
      alert(error);
    }
  };
};
