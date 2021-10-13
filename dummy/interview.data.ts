import { Interview } from "@src/interface/interface";
import { myAccount } from "@dummy/user.data";
import { questionListPage1 } from "@dummy/question.data";
import { answerList } from "@dummy/answer.data";

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

export const questionToAnswer = [
  {
    id: 0,
    question: questionListPage1[0],
    answer: answerList[0],
  },
  {
    id: 1,
    question: questionListPage1[1],
    answer: answerList[1],
  },
  {
    id: 3,
    question: questionListPage1[3],
    answer: answerList[3],
  },
  {
    id: 4,
    question: questionListPage1[4],
    answer: answerList[4],
  },
  {
    id: 5,
    question: questionListPage1[5],
    answer: answerList[2],
  },
];
