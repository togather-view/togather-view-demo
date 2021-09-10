import { Message, MessageSide } from "@src/interface/interface";

export default {};
export const message1: Message = {
  id: 1,
  side: MessageSide.INTERVIEWER,
  contents: "안녕하세요, 예진님!",
};
export const message2: Message = {
  id: 2,
  side: MessageSide.INTERVIEWER,
  contents: "지금부터 예진님의 면접을 시작하겠습니다.",
};
export const message3: Message = {
  id: 3,
  side: MessageSide.INTERVIEWER,
  contents:
    "이번 면접에서 예진님은 프론트엔드 직군에 지원하셨네요.이번 면접에서 예진님은 프론트엔드 직군에 지원하셨네요.이번 면접에서 예진님은 프론트엔드 직군에 지원하셨네요.",
};
export const message4: Message = {
  id: 4,
  side: MessageSide.INTERVIEWER,
  contents: "예진님의 주 기술은 Javascript, React 등이군요.",
};
export const message5: Message = {
  id: 5,
  side: MessageSide.INTERVIEWER,
  contents: "우선 1분 간 간단히 자기소개를 부탁드리겠습니다.",
};
export const message6: Message = {
  id: 6,
  side: MessageSide.INTERVIEWEE,
  contents:
    "안녕하세요? 저는 프론트엔드 개발자 조예진입니다. 잘부탁드립니다.안녕하세요? 저는 프론트엔드 개발자 조예진입니다. 잘부탁드립니다.안녕하세요? 저는 프론트엔드 개발자 조예진입니다. 잘부탁드립니다.안녕하세요? 저는 프론트엔드 개발자 조예진입니다. 잘부탁드립니다.",
};
export const message7: Message = {
  id: 7,
  side: MessageSide.INTERVIEWER,
  contents: "잘 들었습니다.",
};
export const message8: Message = {
  id: 8,
  side: MessageSide.INTERVIEWER,
  contents: "지금부터 기술 면접을 시작하겠습니다.",
};
export const message9: Message = {
  id: 9,
  side: MessageSide.INTERVIEWER,
  contents: "호이스팅이 무엇인지 설명해주세요.",
};
export const messageList = [
  message1,
  message2,
  message3,
  message4,
  message5,
  message6,
  message7,
  message8,
  message9,
];
