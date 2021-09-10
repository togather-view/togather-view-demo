import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Avatar, Button } from "antd";
import _ from "lodash";

import LoadingDotsComponent from "@src/components/common/LoadingDots.component";
import TagComponent from "@src/components/common/Tag.component";

// dummy
import { myAccount } from "@dummy/user.data";
import { messageList } from "@dummy/message.data";

// type
import { MessageSide } from "@src/interface/interface";

// styles
import styles from "@src/styles/pages/InterviewMessenger.module.scss";

function InterviewMessengerPage() {
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [leftTime, setLeftTime] = useState("");

  const startTimer = useCallback(() => {
    let time = 60;
    let min = 0;
    let sec = 0;
    const x = () =>
      setInterval(() => {
        min = parseInt(String(time / 60), 10);
        sec = time % 60;
        setLeftTime(`${min}분 ${sec}초`);
        time -= 1;
        if (time < 0) {
          clearInterval(x);
        }
      }, 1000);
    x();
  }, []);

  useEffect(() => {
    startTimer();
  }, []);

  const makeMessageDebounce = useCallback(
    (time) =>
      _.debounce(
        () =>
          setDisplayedMessages([
            ...displayedMessages,
            messageList[displayedMessages.length],
          ]),
        time,
      ),
    [displayedMessages],
  );

  const messageListDOM = useMemo(() => {
    const isLeft = messageList.length > displayedMessages.length;
    const list = displayedMessages.map((x, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <p
        key={`message-list-${index}`}
        className={
          x.side === MessageSide.INTERVIEWER
            ? styles.contentsLeft
            : styles.contentsRight
        }
      >
        {x.contents}
      </p>
    ));
    if (isLeft) {
      list.push(
        <p className={styles.contentsLeft}>
          <LoadingDotsComponent />
        </p>,
      );
      const addDisplayMessage = makeMessageDebounce(
        messageList[displayedMessages.length].contents.length * 60,
      );
      addDisplayMessage();
    }
    return list;
  }, [displayedMessages, makeMessageDebounce]);

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

            <p>{leftTime}</p>

            <Button className={styles.submit} type="link">
              완료
            </Button>
          </header>
          <main>
            <div className={styles.messenger}>
              <div className={styles.messageWrap}>
                <div className={styles.message}>{messageListDOM}</div>
              </div>
            </div>
          </main>
          <div className={styles.footer}>
            <textarea placeholder="답변 입력하기" />
            {/* <Button type="link">전송</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(InterviewMessengerPage);
