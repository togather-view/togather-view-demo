import { User } from "@src/interface/interface";
import { tJavascript } from "@dummy/tech.data";
import { gFrontend } from "@dummy/group.data";

// eslint-disable-next-line import/prefer-default-export
export const myAccount: User = {
  id: 1,
  firstName: "예준",
  familyName: "조",
  techList: [tJavascript],
  jobList: [gFrontend],
  avatarUrl:
    "https://cdn.pixabay.com/photo/2017/09/20/12/12/girl-2768346__480.jpg",
};
