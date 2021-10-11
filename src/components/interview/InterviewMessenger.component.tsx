import {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

// dummy
import { interviewMessageList } from "@dummy/message.data";
import { myAccount } from "@dummy/user.data";

// lib
import MessengerContext from "@src/context/Messenger.context";
import { MessageSide } from "@src/interface/interface";
import { answerTimeLimit } from "@src/lib/constant/timer.constant";
import { startTimer } from "@src/util/messenger";

// components
import InterviewMessengerHeaderComponent from "@src/components/interview/InterviewMessengerHeader.component";
import LoadingDotsComponent from "@src/components/common/LoadingDots.component";

// styles
import styles from "@src/styles/pages/InterviewMessenger.module.scss";

function InterviewMessengerComponent() {
  const {
    questionIndex,
    questionTotal,
    allowMessage,
    isMessageLeft,
    displayedList,
    showIntroMessage,
    showOutroMessage,
    showQuestionMessage,
    addMessage,
  } = useContext(MessengerContext);

  const textareaRef = useRef(null);
  const [isIntervieweeDone, setIntervieweeDone] = useState(false);
  const [leftTime, setLeftTime] = useState("1분");
  const [timer, setTimer] = useState(null);

  const onTime = useCallback((min, sec) => {
    setLeftTime((min > 0 ? `${min}분` : "") + (sec > 0 ? `${sec}초` : ""));
  }, []);

  const onSubmitMessage = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        if (!e.shiftKey) {
          e.preventDefault();
          addMessage(e.target.value);
          e.target.value = "";
        }
      }
    },
    [addMessage],
  );

  const afterTime = useCallback(() => {
    clearInterval(timer);
    setTimer(null);
    setLeftTime("1분");
    setIntervieweeDone(true);
  }, [timer]);

  const onClickSubmit = useCallback(() => {
    setIntervieweeDone(true);
    if (timer) {
      afterTime();
    }
  }, [afterTime, timer]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => showIntroMessage(), []);

  useEffect(() => {
    if (isIntervieweeDone) {
      if (questionIndex === questionTotal) showOutroMessage();
      else showQuestionMessage();
      setIntervieweeDone(false);
    }
  }, [
    showQuestionMessage,
    questionIndex,
    isIntervieweeDone,
    questionTotal,
    showOutroMessage,
  ]);

  useEffect(() => {
    if (allowMessage && !timer) {
      textareaRef.current.focus();
      setTimer(startTimer(answerTimeLimit, onTime, () => afterTime()));
    }
  }, [afterTime, allowMessage, onTime, timer]);

  const messageListDOM = useMemo(() => {
    const list = displayedList.map((x) => {
      const cn =
        x.side === MessageSide.INTERVIEWER
          ? styles.contentsLeft
          : styles.contentsRight;
      return (
        <div key={x.id} className={cn}>
          {x.contents}
        </div>
      );
    });
    if (isMessageLeft) {
      const s = Symbol("loading").toString();
      list.push(
        <div key={s} className={styles.contentsLeft}>
          <LoadingDotsComponent />
        </div>,
      );
    }
    return list;
  }, [displayedList, isMessageLeft]);

  const messageToolStyles = useMemo(
    () => (allowMessage ? styles.toolContainer : styles.toolContainerInvisible),
    [allowMessage],
  );

  return (
    <div className={styles.messengerWrap}>
      <InterviewMessengerHeaderComponent
        totalQuestion={interviewMessageList.length}
        nowIndex={questionIndex}
        jobList={myAccount.jobList}
        techList={myAccount.techList}
      />
      {/* 메신저 대화 부분 */}
      <main>
        <div className={styles.messenger}>
          <div className={styles.messageWrap}>
            <div className={styles.message}>{messageListDOM}</div>
          </div>
        </div>
      </main>
      {/* 메신저 입력 부분 */}
      <div className={styles.footer}>
        <div className={messageToolStyles}>
          <p>{leftTime} 후 답변 종료</p>
          <button
            type="button"
            className={styles.submit}
            onClick={onClickSubmit}
          >
            답변 완료하기
          </button>
        </div>
        <textarea
          ref={textareaRef}
          disabled={!allowMessage}
          placeholder="답변 입력하기"
          onKeyDown={onSubmitMessage}
        />
      </div>
    </div>
  );
}

export default memo(InterviewMessengerComponent);
