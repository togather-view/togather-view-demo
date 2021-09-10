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
    "http://file3.instiz.net/data/file3/2018/03/08/9/1/7/917ed6f38cc0beeda22294ecb7b48d9b.jpg",
};
