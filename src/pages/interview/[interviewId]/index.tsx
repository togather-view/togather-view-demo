import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import _ from "lodash";

// component
import LoadingDotsComponent from "@src/components/common/LoadingDots.component";
import InterviewInfoComponent from "@src/components/interview/InterviewInfo.component";
import InterviewMessengerHeaderComponent from "@src/components/interview/InterviewMessengerHeader.component";

// util
import { startTimer } from "@src/util/messenger";

// dummy
import { myAccount } from "@dummy/user.data";
import { interviewMessageList } from "@dummy/message.data";

// type
import { MessageSide } from "@src/interface/interface";

// styles
import styles from "@src/styles/pages/InterviewMessenger.module.scss";

const messageTerm = 1200;
const answerTimeLimit = 60;

function InterviewMessengerPage() {
  const textareaRef = useRef(null);

  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [leftTime, setLeftTime] = useState("");
  const [timer, setTimer] = useState(null);
  const [isIntervieweeDone, setIntervieweeDone] = useState(false);
  const [allowMessage, setAllowMessage] = useState(false);

  const [messageListIndex, setMessageListIndex] = useState(0);
  const [isMessageLeft, setMessageLeft] = useState(true);

  const onTime = useCallback((min, sec) => {
    setLeftTime((min > 0 ? `${min}분` : "") + (sec > 0 ? `${sec}초` : ""));
  }, []);

  const startInterviewerMessage = useCallback(() => {
    setMessageLeft(true);
    setAllowMessage(false);
    if (messageListIndex >= interviewMessageList.length) return;
    const toAddList = interviewMessageList[messageListIndex];
    const added = [...displayedMessages];
    let index = 0;
    const x = _.debounce(() => {
      added.push(toAddList[index]);
      setDisplayedMessages([...added]);
      index += 1;
      if (index === toAddList.length) setMessageLeft(false);
      if (index < toAddList.length) {
        x();
      } else if (messageListIndex + 1 < interviewMessageList.length) {
        setAllowMessage(true);
        setIntervieweeDone(false);
        setMessageListIndex(messageListIndex + 1);
        textareaRef.current.focus();
        setTimer(
          startTimer(answerTimeLimit, onTime, () => setIntervieweeDone(true)),
        );
      }
    }, messageTerm);
    x();
  }, [textareaRef, displayedMessages, messageListIndex, onTime]);

  const onSubmitMessage = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        if (!e.shiftKey) {
          e.preventDefault();
          setDisplayedMessages([
            ...displayedMessages,
            {
              id: 213,
              contents: e.target.value,
              side: MessageSide.INTERVIEWEE,
            },
          ]);
          e.target.value = "";
        }
      }
    },
    [displayedMessages],
  );

  const onClickSubmit = useCallback(() => {
    setIntervieweeDone(true);
    if (timer) {
      clearInterval(timer);
      setTimer(null);
      setLeftTime("");
    }
  }, [timer]);

  // 이 Effect 는 mount 이후 한 번만 실행
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => startInterviewerMessage(), []);

  useEffect(() => {
    if (isIntervieweeDone) {
      startInterviewerMessage();
      setIntervieweeDone(false);
    }
  }, [isIntervieweeDone, startInterviewerMessage]);

  const messageListDOM = useMemo(() => {
    const list = displayedMessages.map((x, index) => (
      <div
        // eslint-disable-next-line react/no-array-index-key
        key={`message-list-${messageListIndex}-${index}`}
        className={
          x.side === MessageSide.INTERVIEWER
            ? styles.contentsLeft
            : styles.contentsRight
        }
      >
        {x.contents}
      </div>
    ));
    if (isMessageLeft) {
      list.push(
        <div
          key={`loading-${messageListIndex}-${displayedMessages.length}`}
          className={styles.contentsLeft}
        >
          <LoadingDotsComponent />
        </div>,
      );
    }
    return list;
  }, [displayedMessages, isMessageLeft, messageListIndex]);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <InterviewInfoComponent
          user={myAccount}
          jobList={myAccount.jobList}
          techList={myAccount.techList}
        />
        {/* Messenger */}
        <div className={styles.messengerWrap}>
          <main>
            <div className={styles.messenger}>
              <div className={styles.messageWrap}>
                <div className={styles.message}>{messageListDOM}</div>
              </div>
            </div>
          </main>
          <div className={styles.footer}>
            <textarea
              ref={textareaRef}
              disabled={!allowMessage}
              placeholder="답변 입력하기"
              onKeyDown={onSubmitMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(InterviewMessengerPage);
