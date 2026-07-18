export interface IContact {
  fullName?: string;
  phoneNumber?: string;
  personalWebsite?: string;
  state?: string;
  email?: string;
  linkedin?: string;
  country?: string;
  city?: string;
}

export interface IExperience {
  role?: string;
  company?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  description?: string;
}

export interface IProject {
  title?: string;
  organization?: string;
  startDate?: string;
  endDate?: string;
  projectUrl?: string;
  description?: string;
}

export interface IEducation {
  degree?: string;
  school?: string;
  location?: string;
  endDate?: string;
  minor?: string;
  gpa?: string;
  additionalInfo?: string;
}

export interface ICertification {
  name?: string;
  issuer?: string;
  date?: string;
  relevance?: string;
}

export interface ICoursework {
  courseName?: string;
  institution?: string;
  date?: string;
  skillsUsed?: string;
  skillsApplied?: string;
}

export interface IInvolvement {
  role?: string;
  organization?: string;
  startDate?: string;
  endDate?: string;
  college?: string;
  description?: string;
}

export interface ISkill {
  skill?: string;
}

export interface ISummary {
  description?: string;
}

export interface IResumeContent {
  contact?: IContact;
  experience?: IExperience;
  project?: IProject;
  education?: IEducation;
  certification?: ICertification;
  coursework?: ICoursework;
  involvement?: IInvolvement;
  skill?: ISkill;
  summary?: ISummary;
}

