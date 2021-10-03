import { Question } from "@src/interface/interface";
import { tBrowser, tCss, tJavascript, tNetwork } from "@dummy/tech.data";
import { gFrontend, gNode, gServer } from "@dummy/group.data";

const que2: Question = {
  id: 2,
  contents: "호이스팅이란 무엇인가요?",
  techList: [tJavascript],
  jobGroup: [gFrontend, gNode],
};
const que3: Question = {
  id: 3,
  contents: "클로저가 무엇인가요?",
  techList: [tJavascript],
  jobGroup: [gFrontend, gNode],
};
const que4: Question = {
  id: 4,
  contents: "this가 JavaScript에서 어떻게 동작하는지 설명하세요.",
  techList: [tJavascript],
  jobGroup: [gFrontend, gNode],
};
const que5: Question = {
  id: 5,
  contents: "JavaScript는 어떤 언어인가요?",
  techList: [tJavascript],
  jobGroup: [gFrontend, gNode],
};
const que6: Question = {
  id: 6,
  contents: "margin과 padding에 대해 설명해보세요.",
  techList: [tCss],
  jobGroup: [gFrontend],
};
const que7: Question = {
  id: 7,
  contents: "CSS의 position에 대하여 설명해보세요.",
  techList: [tCss],
  jobGroup: [gFrontend],
};
const que8: Question = {
  id: 8,
  contents: "브라우저에 www.naver.com을 입력하면 무슨 일이 일어나나요?",
  techList: [tBrowser],
  jobGroup: [gFrontend],
};
const que9: Question = {
  id: 9,
  contents: "각 브라우저 저장소의 차이점에 대해 설명해보세요.",
  techList: [tBrowser],
  jobGroup: [gFrontend],
};
const que10: Question = {
  id: 10,
  contents: "GET과 POST의 차이는 무엇인가요?",
  techList: [tNetwork],
  jobGroup: [gFrontend, gServer],
};
const que11: Question = {
  id: 11,
  contents: "RESTful API란 무엇인가요?",
  techList: [tNetwork],
  jobGroup: [gServer],
};
const que12: Question = {
  id: 12,
  contents: "RESTful하게 API를 디자인한다는 것이 무엇인가요?",
  techList: [tNetwork],
  jobGroup: [gServer],
};

export default {
  // que1,
  que2,
  que3,
  que4,
  que5,
  que6,
  que7,
  que8,
  que9,
  que10,
  que11,
  que12,
};

export const questionList = [
  // que1,
  que2,
  que3,
  que4,
  que5,
  que6,
  que7,
  que8,
  que9,
  que10,
  que11,
  que12,
];

export const questionListPage1 = questionList.slice(0, 10);
export const questionListPage2 = questionList.slice(10, 12);
