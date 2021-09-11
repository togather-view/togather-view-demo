import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Avatar, Button } from "antd";
import _ from "lodash";

// component
import LoadingDotsComponent from "@src/components/common/LoadingDots.component";
import TagComponent from "@src/components/common/Tag.component";

// util
import { startTimer } from "@src/util/messenger";

// dummy
import { myAccount } from "@dummy/user.data";
import { interviewMessageList, messageList } from "@dummy/message.data";

// type
import { MessageSide } from "@src/interface/interface";

// styles
import styles from "@src/styles/pages/InterviewMessenger.module.scss";

const messageTerm = 1200;
const answerTimeLimit = 60;

function InterviewMessengerPage() {
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [leftTime, setLeftTime] = useState("");
  const [timer, setTimer] = useState(null);
  const [isIntervieweeDone, setIntervieweeDone] = useState(false);
  const [allowMessage, setAllowMessage] = useState(false);

  const [messageListIndex, setMessageListIndex] = useState(0);
  const [isMessageLeft, setMessageLeft] = useState(true);

  const textareaRef = useRef(null);

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
        console.log(index, toAddList.length);
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

  useEffect(() => startInterviewerMessage(), []);
  useEffect(() => {
    if (isIntervieweeDone) {
      startInterviewerMessage();
      setIntervieweeDone(false);
    }
  }, [isIntervieweeDone, startInterviewerMessage]);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.infoWrap}>
          <h1>투게더뷰</h1>
          <h2>예진님의 면접</h2>
          <div className={styles.tagList}>
            <h3>선택한 직무</h3>
            {myAccount.jobList.map((x) => (
              <TagComponent title={x.name} key={x.id} />
            ))}
          </div>
          <div className={styles.tagList}>
            <h3>선택한 기술</h3>
            {myAccount.techList.map((x) => (
              <TagComponent title={x.name} color={x.color} key={x.id} />
            ))}
          </div>
        </div>
        <div className={styles.messengerWrap}>
          <header>
            <div className={styles.title}>
              <div className={styles.avatar}>
                <Avatar src="/static/interviewer.png" size={36} />
              </div>
              <p className={styles.name}>면접관</p>
            </div>

            <p className={styles.timer}>{leftTime}</p>

            {allowMessage && (
              <Button
                className={styles.submit}
                type="link"
                onClick={onClickSubmit}
              >
                완료
              </Button>
            )}
          </header>
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
