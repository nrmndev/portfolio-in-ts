export type DataType = {
  skills: SkillsType[];
  experiences: ExperienceType[];
  trainings: TrainingType[];
  skillTopics: SkillTopicsType[];
};
export const InitialValueType = {
  skills: [{} as SkillsType],
  experiences: [{} as ExperienceType],
  trainings: [{} as TrainingType],
  skillTopics: [{} as SkillTopicsType],
  //data: [{} as any],
};

export type SkillsType = {
  id: string;
  title: string;
  message: string;
  description: string;
  svgIcon: string;
};

export type ExperienceType = {
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
};

export type TrainingType = {
  id: string;
  title: string;
  description: string;
  message: string;
  status: string;
  courseHighlights: string[];
  linkToCertificate: string;
};
export type SkillTopicsType = {
  id: string;
  overview: string;
  topics: [{ topicID: string; title: string; file: string; message: string }];
};
