// export type DataType = {
//   skills: SkillsType[];
//   experiences: ExperienceType[];
//   trainings: TrainingType[];
//   skillTopics: SkillTopicsType[];
//   selectedSkill: SkillsType;
// };
export type DataType<T> = {
  skills: SkillsType[];
  experiences: ExperienceType[];
  trainings: TrainingType[];
  skillTopics: SkillTopicsType[];
  portfolio: PortfolioType[];
  editingState: T;
};

export const DataInitialValueType = {
  experiences: [{} as ExperienceType],
  skills: [{} as SkillsType],
  skillTopics: [{} as SkillTopicsType],
  trainings: [{} as TrainingType],
  portfolio: [{} as PortfolioType],
  editingState: {} as any,
};

export type PortfolioType = {
  id: string;
  title: string;
  portfolioURL: string;
  tags: string[];
  category: string;
  portfolioImage: string;
  target: string;
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
