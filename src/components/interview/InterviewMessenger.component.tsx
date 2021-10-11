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
import interview1 from "@dummy/interview.data";

// lib
import MessengerContext from "@src/context/Messenger.context";
import { answerTimeLimit } from "@src/lib/constant/timer.constant";
import { startTimer } from "@src/util/messenger";

// components
import InterviewMessengerHeaderComponent from "@src/components/interview/InterviewMessengerHeader.component";

// styles
import styles from "@src/styles/pages/InterviewMessenger.module.scss";
import InterviewMessengerBodyComponent from "@src/components/interview/InterviewMessengerBody.component";

function InterviewMessengerComponent() {
  const {
    questionIndex,
    questionTotal,
    allowMessage,
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

  const messageToolStyles = useMemo(
    () => (allowMessage ? styles.toolContainer : styles.toolContainerInvisible),
    [allowMessage],
  );

  return (
    <div className={styles.messengerWrap}>
      <InterviewMessengerHeaderComponent
        jobList={interview1.jobList}
        techList={interview1.techList}
      />
      {/* 메신저 대화 부분 */}
      <main>
        <InterviewMessengerBodyComponent />
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
