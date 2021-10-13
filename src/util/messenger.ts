import {
  JobGroup,
  Message,
  MessageSide,
  Question,
  Tech,
  User,
} from "@src/interface/interface";
import { generateRandomKey } from "@src/util/key";

interface CreateNewMessage {
  (index: number | string, contents: string, side: MessageSide): Message;
}

interface CreateNewMessageList {
  (index: number | string, contentList: string[], side: MessageSide): Message[];
}

interface StartTimer {
  (
    time: number,
    onTime: (min: number, sec: number) => void,
    onAfterTime: () => void,
  ): ReturnType<typeof setInterval>;
}

interface GetIntroMessageList {
  (user: User, jobList: JobGroup[], techList: Tech[]): Message[];
}

interface GetOutroMessageList {
  (): Message[];
}

interface GetQuestionMessageList {
  (question: Question, index: number, isLastMessage: boolean): Message[];
}

/**
 * 단일 메시지 객체 생성
 * @param index
 * @param contents
 * @param side
 */
export const createNewMessage: CreateNewMessage = function createNewMessage(
  index,
  contents,
  side,
) {
  const id = index + generateRandomKey();
  return {
    id,
    contents,
    side,
  };
};

/**
 * 여러 개의 문자열로부터 메시지 객체 배열을 한 번에 생성
 * @param index
 * @param contentList
 * @param side
 */
const createNewMessageList: CreateNewMessageList =
  function createNewMessageList(index, contentList, side) {
    return contentList.map((x) => createNewMessage(index, x, side));
  };

/**
 * 타이머
 * @param time
 * @param onTime
 * @param onAfterTime
 */
export const startTimer: StartTimer = (time, onTime, onAfterTime) => {
  let leftTime = time;
  let min = 0;
  let sec = 0;
  const x = setInterval(() => {
    min = parseInt(String(leftTime / 60), 10);
    sec = leftTime % 60;
    onTime(min, sec);
    leftTime -= 1;
    if (leftTime < 0) {
      clearInterval(x);
      onAfterTime();
    }
  }, 1000);
  return x;
};

/**
 * 면접 시작 전 인삿말 메시지 배열 생성
 * @param user
 * @param jobList
 * @param techList
 */
export const getIntroMessageList: GetIntroMessageList =
  function getIntroMessageList(user, jobList, techList) {
    const name = user.firstName;
    const job =
      jobList[0].name +
      (jobList.length > 1 ? ` 외 ${jobList.length - 1}가지` : "");
    const tech =
      [...techList]
        .splice(0, 3)
        .map((x) => x.name)
        .join(", ") +
      (techList.length > 3 ? ` 외 ${techList.length - 3}가지` : ` 등`);

    const contentsList: string[] = [
      `안녕하세요, ${name}님!`,
      `이번 면접에서 ${name}님은 ${job} 직군에 지원하셨네요.`,
      `${name}님의 주기술은 ${tech}이군요.`,
      `그러면 지금부터 ${name}님의 면접을 시작하겠습니다.`,
    ];

    const result: Message[] = createNewMessageList(
      "intro",
      contentsList,
      MessageSide.INTERVIEWER,
    );
    return result;
  };
export const getOutroMessageList: GetOutroMessageList =
  function getOutroMessageList() {
    const contentsList: string[] = [
      `수고하셨습니다. 이것으로 면접을 마치도록 하겠습니다.`,
    ];

    const result: Message[] = createNewMessageList(
      "outro",
      contentsList,
      MessageSide.INTERVIEWER,
    );
    return result;
  };

/**
 * 면접 도중 질문 메시지 리스트 생성
 * TODO:: n번 질문 --> n 번째 질문입니다로 바꾸기
 * TODO:: 면접 상황에 따라서 메시지가 표시되게 변경 (알겠습니다 / 시간 관계 상 여기까지만 듣겠습니다 ...)
 * @param question
 * @param index
 * @param isLastMessage
 */
export const getQuestionMessageList: GetQuestionMessageList =
  function getQuestionMessageList(
    question,
    index, // arrayList 내의 index 그대로 사용할 것 (0 ... )
    isLastMessage,
  ) {
    const result: Message[] = [];

    if (isLastMessage)
      result.push(
        createNewMessage(index, `마지막 질문입니다.`, MessageSide.INTERVIEWER),
      );
    else
      result.push(
        createNewMessage(
          index.toString(),
          `${index + 1}번 질문입니다.`,
          MessageSide.INTERVIEWER,
        ),
      );

    result.push(
      createNewMessage(index, question.contents, MessageSide.INTERVIEWER),
    );

    return result;
  };

export default {
  startTimer,
  getIntroMessageList,
  getOutroMessageList,
  getQuestionMessageList,
};
