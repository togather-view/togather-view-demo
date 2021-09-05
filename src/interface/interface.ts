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

export interface Answer {
  id: number;
  contents: string;
  likeCount: number;
  createdBy: User;
  createdAt: string;
}

export interface User {
  id: number;
  firstName: string;
  familyName: string;
  techList: Tech[];
  jobList: JobGroup[];
  avatarUrl: string;
}
