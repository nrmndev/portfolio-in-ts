import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataType, InitialValueType } from "./data/data-types";

export interface IDataType {
  skills: SkillsType[];
  experiences: ExperienceType[];
  trainings: TrainingType[];
  skillTopics: skillTopicsType[];
}
export interface SkillsType {
  id: string;
  title: string;
  message: string;
  description: string;
  svgIcon: string;
}

export interface ExperienceType {
  id: string;
  company: string;
  jobposition: string;
  tenureship: string;
  description: string;
  image: string;
  message: string;
  workURL: string;
  workURLText: string;
  achievements: string[];
  tasks: string[];
}

export interface skillTopicsType {
  id: string;
  overview: string;
  topics: [{ topicID: string; title: string; file: string; message: string }];
}

export interface TrainingType {
  id: string;
  title: string;
  description: string;
  message: string;
  status: string;
  courseHighlights: string[];
  linkToCertificate: string;
}
export const dataSlice = createSlice({
  name: "data",
  initialState: InitialValueType,
  reducers: {
    addData(state, action: PayloadAction<DataType>) {
      state = action.payload;
      // state.experiences = action.payload.experiences;
      // state.trainings = action.payload.trainings;
      // state.skillTopics = action.payload.skillTopics;
    },
    // addDummy(state, action) {
    //   state.data = action.payload;
    // },
  },
});

export const dataActions = dataSlice.actions;
