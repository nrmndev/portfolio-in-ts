import { dataActions } from "./data-slice";
import { DataType, SkillsType } from "./data-types";

//GLOBAL ACTIONS
export const dataAddData = (data: DataType<void>) => dataActions.addData(data);

//SKILL ACTIONS
export const dataEnableSkillEditing = () => dataActions.enableSkillEditing();
export const dataDeleteSkill = (id: string) => dataActions.deleteSkill(id);
export const dataAddSkill = (skill: SkillsType) => dataActions.addSkill(skill);
export const dataUpdateSkillById = (skillToUpdate: SkillsType) =>
  dataActions.updateSkillById(skillToUpdate);

export const dataSetSelectedSkillById = (skillId: string) =>
  dataActions.setSelectedSkillByID(skillId);

export const dataClearSelectedSkillById = () =>
  dataActions.clearSelectedSkillById();
