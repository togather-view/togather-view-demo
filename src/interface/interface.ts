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
