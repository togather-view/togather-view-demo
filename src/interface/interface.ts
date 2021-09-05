export interface Tech {
  id: number;
  name: string;
  color: string;
}

export interface JobGroup {
  id: number;
  name: string;
  color: string;
}

export interface Question {
  id: number;
  contents: string;
  techList: Tech[];
  jobGroup: JobGroup[];
}

export interface User {
  id: number;
  firstName: string;
  familyName: string;
  techList: Tech[];
  jobList: JobGroup[];
  avatarUrl: string;
}
