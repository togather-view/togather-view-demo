import { Interview } from "@src/interface/interface";
import { myAccount } from "@dummy/user.data";
import { questionListPage1 } from "@dummy/question.data";

export const interview1: Interview = {
  id: "1",
  jobList: myAccount.jobList,
  techList: myAccount.techList,
  questionList: questionListPage1,
  user: myAccount,
  useTimer: true,
  containAttitude: false,
};

export default interview1;
