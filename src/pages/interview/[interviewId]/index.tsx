import { memo } from "react";

// dummy
import { myAccount } from "@dummy/user.data";

// lib
import { questionList } from "@dummy/question.data";
import { MessengerProvider } from "@src/context/Messenger.context";

// components
import InterviewMessengerComponent from "@src/components/interview/InterviewMessenger.component";
import MessengerInterviewInfoWrapperComponent from "@src/components/interview/MessengerInterviewInfoWrapper.component";

// styles
import styles from "@src/styles/pages/InterviewMessenger.module.scss";

function InterviewMessengerPage() {
  return (
    <MessengerProvider questionList={questionList}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.infoWrap}>
            <h1>투게더뷰</h1>
            <MessengerInterviewInfoWrapperComponent
              jobList={myAccount.jobList}
              techList={myAccount.techList}
            />
          </div>
          {/* Messenger */}
          <InterviewMessengerComponent />
        </div>
      </div>
    </MessengerProvider>
  );
}

export default memo(InterviewMessengerPage);
