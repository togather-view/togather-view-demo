import { memo, useContext, useMemo } from "react";

// dummy
import { questionListPage1 } from "@dummy/question.data";

// lib
import { MessageSide } from "@src/interface/interface";
import MessengerContext from "@src/context/Messenger.context";

// components
import AlertNewMessageComponent from "@src/components/interview/AlertNewMessage.component";
import LoadingDotsComponent from "@src/components/common/LoadingDots.component";

// styles
import styles from "@src/styles/pages/InterviewMessenger.module.scss";

function InterviewMessengerBodyComponent() {
  const { isMessageLeft, displayedList } = useContext(MessengerContext);

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

  return (
    <div className={styles.messenger}>
      <div className={styles.messageWrap}>
        <div className={styles.message}>{messageListDOM}</div>
        <AlertNewMessageComponent contents={questionListPage1[0].contents} />
      </div>
    </div>
  );
}

export default memo(InterviewMessengerBodyComponent);
