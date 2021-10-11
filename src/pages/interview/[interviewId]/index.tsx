import { memo } from "react";

// dummy
import interview1 from "@dummy/interview.data";

// lib
import { MessengerProvider } from "@src/context/Messenger.context";

// components
import InterviewMessengerComponent from "@src/components/interview/InterviewMessenger.component";
import MessengerInterviewInfoWrapperComponent from "@src/components/interview/MessengerInterviewInfoWrapper.component";

// styles
import styles from "@src/styles/pages/InterviewMessenger.module.scss";

function InterviewMessengerPage() {
  return (
    <MessengerProvider questionList={interview1.questionList}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.infoWrap}>
            <h1>투게더뷰</h1>
            <MessengerInterviewInfoWrapperComponent
              jobList={interview1.jobList}
              techList={interview1.techList}
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
