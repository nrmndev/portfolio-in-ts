import type { RootState } from "../index";
import { DataType, SkillsType } from "./data-types";

//GLOBAL SELECTOR
export const dataGetData = (state: RootState): DataType<void> => state.data;

//SKILLS SELECTOR
export const dataGetSkills = (state: RootState): SkillsType[] =>
  state.data.skills;

export const dataGetSkillById = (state: RootState): SkillsType =>
  state.data.editingState;
