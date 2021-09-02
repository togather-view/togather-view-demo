import { JobGroup } from "@src/interface/interface";

export const gFrontend: JobGroup = {
  id: 1,
  name: "프론트엔드",
  color: "",
};

export const gServer: JobGroup = {
  id: 2,
  name: "서버",
  color: "",
};

export const gNode: JobGroup = {
  id: 6,
  name: "Node.js",
  color: "",
};

export const gAndroid: JobGroup = {
  id: 3,
  name: "안드로이드",
  color: "",
};

export const gIos: JobGroup = {
  id: 4,
  name: "iOS",
  color: "",
};

export const gDeveloper: JobGroup = {
  id: 5,
  name: "개발자",
  color: "",
};

export default {
  gFrontend,
  gServer,
  gAndroid,
  gIos,
  gDeveloper,
};

export const GroupList = [gFrontend, gServer, gAndroid, gIos, gDeveloper];
