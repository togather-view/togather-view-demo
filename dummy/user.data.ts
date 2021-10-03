import { User } from "@src/interface/interface";
import { tBrowser, tCss, tJavascript, tReact } from "@dummy/tech.data";
import { gFrontend, gServer } from "@dummy/group.data";

// eslint-disable-next-line import/prefer-default-export
export const myAccount: User = {
  id: 1,
  firstName: "예준",
  familyName: "조",
  techList: [tJavascript, tReact, tCss, tBrowser],
  jobList: [gFrontend, gServer],
  avatarUrl:
    "https://cdn.pixabay.com/photo/2021/09/15/12/34/woman-6626742__480.jpg",
};
