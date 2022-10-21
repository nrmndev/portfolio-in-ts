import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const dataType = [
  {
    skills: [{ skills: {} as skillsType }],
    experiences: [{ experiences: {} as experienceType }],
    trainings: [{ trainings: {} as trainingType }],
    skillTopics: [{ skillTopics: {} as skillTopicsType }],
  },
];
export interface skillsType {
  id: number;
  title: string;
  image: string;
  message: string;
  description: string;
  svgIcon: string;
}

export interface experienceType {
  company: string;
  jobposition: string;
  description: string;
  image: string;
  achievements: string[];
  workURL: string;
  workURLText: string;
  tasks: string[];
  message: string;
}

export interface skillTopicsType {
  id: string;
  overview: string;
  topics: [{ topicID: string; title: string; file: string; message: string }];
}

export interface trainingType {
  id: string;
  title: string;
  message: string;
  description: string;
}
export const dataSlice = createSlice({
  name: "data",
  initialState: {
    skills: [{ skills: {} as skillsType }],
    experiences: [{ experiences: {} as experienceType }],
    trainings: [{ trainings: {} as trainingType }],
    skillTopics: [{ skillTopics: {} as skillTopicsType }],
    skillContent: [{} as skillTopicsType],
    data: [{} as any],
  },
  reducers: {
    addData(
      state,
      action: PayloadAction<{
        skills: {
          skills: skillsType;
        }[];
        experiences: {
          experiences: experienceType;
        }[];
        trainings: {
          trainings: trainingType;
        }[];
        skillTopics: {
          skillTopics: skillTopicsType;
        }[];
      }>
    ) {
      state.skills = action.payload.skills;
      state.experiences = action.payload.experiences;
      state.trainings = action.payload.trainings;
      state.skillTopics = action.payload.skillTopics;
    },
    addDummy(state, action) {
      state.data = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
