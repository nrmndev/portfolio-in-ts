import { PayloadAction } from "@reduxjs/toolkit";
import {
  DataInitialValueType,
  DataType,
  //DataTypeWithEdit,
  SkillsType,
} from "../data-types";

export const skillReducer = {
  enableSkillEditing(state: DataType<SkillsType>) {
    return { ...state, editingState: {} as SkillsType };
  },
  deleteSkill(
    state: typeof DataInitialValueType,
    action: PayloadAction<string>
  ) {
    const updatedSkill = state.skills.filter(
      (skill) => skill.id !== action.payload
    );

    return { ...state, skills: updatedSkill };
  },
  addSkill(
    state: typeof DataInitialValueType,
    action: PayloadAction<SkillsType>
  ) {
    state.skills.push(action.payload);
    return state;
  },
  updateSkillById(
    state: typeof DataInitialValueType,
    action: PayloadAction<SkillsType>
  ) {
    const existingSkillIndex = state.skills.findIndex(
      (skill) => skill.id == action.payload.id
    );
    if (existingSkillIndex) {
      state.skills[existingSkillIndex] = action.payload;
    }
    return state;
  },
  setSelectedSkillByID(
    state: typeof DataInitialValueType,
    action: PayloadAction<string>
  ) {
    const existingSkill = state.skills.find(
      (skill) => skill.id == action.payload
    );
    if (existingSkill) {
      return { ...state, editingState: existingSkill };
    }
    return state;
  },
  clearSelectedSkillById(state: typeof DataInitialValueType) {
    return { ...state, editingState: {} as SkillsType };
  },
};
