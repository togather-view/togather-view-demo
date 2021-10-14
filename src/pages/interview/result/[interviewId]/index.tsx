import { memo, useMemo } from "react";

// dummy
import { myAccount } from "@dummy/user.data";
import { questionToAnswer } from "@dummy/interview.data";

// components
import LayoutComponent from "@src/components/common/Layout.component";
import InterviewResultInfoComponent from "@src/components/interview/result/InterviewResultInfo.component";
import InterviewResultQuestionComponent from "@src/components/question/InterviewResultQuestion.component";

// styles
import styles from "@src/styles/pages/InterviewResult.module.scss";

function InterviewResultPage() {
  const questionListDOM = useMemo(
    () => (
      <div className={styles.list}>
        {questionToAnswer.map((x, index) => (
          <InterviewResultQuestionComponent
            key={x.id}
            questionToAnswer={x}
            index={index + 1}
          />
        ))}
      </div>
    ),
    [],
  );

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
        {questionListDOM}
      </div>
    </LayoutComponent>
  );
}

export default memo(InterviewResultPage);
