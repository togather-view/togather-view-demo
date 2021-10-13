import { memo } from "react";

// lib
import { myAccount } from "@dummy/user.data";

// components
import LayoutComponent from "@src/components/common/Layout.component";
import InterviewResultInfoComponent from "@src/components/interview/result/InterviewResultInfo.component";

// styles
import styles from "@src/styles/pages/InterviewResult.module.scss";

function InterviewResultPage() {
  return (
    <LayoutComponent>
      <div className={styles.container}>
        <InterviewResultInfoComponent
          useTimer={false}
          containAttitude
          interviewedAt="2021년 10월 3일"
          totalQuestion={3}
          jobList={myAccount.jobList}
          techList={myAccount.techList}
        />
        <div className={styles.list}>list</div>
      </div>
    </LayoutComponent>
  );
}

export default memo(InterviewResultPage);
