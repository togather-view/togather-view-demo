import { memo } from "react";
import { CalendarTwoTone, QuestionCircleTwoTone } from "@ant-design/icons";

// lib
import { JobGroup, Tech } from "@src/interface/interface";

// components
import TagListComponent from "@src/components/common/TagList.component";
import InterviewConditionIconContainerComponent from "@src/components/interview/InterviewConditionIconConatiner.component";

// styles
import styles from "@src/styles/pages/InterviewResult.module.scss";

interface Props {
  useTimer: boolean;
  containAttitude: boolean;
  interviewedAt: string;
  totalQuestion: number;
  jobList: JobGroup[];
  techList: Tech[];
}

function InterviewResultInfoComponent({
  useTimer,
  containAttitude,
  interviewedAt,
  totalQuestion,
  jobList,
  techList,
}: Props) {
  return (
    <div className={styles.info}>
      <InterviewConditionIconContainerComponent
        useTimer={useTimer}
        containAttitude={containAttitude}
      />
      <div className={styles.wrapper}>
        <div className={styles.detail}>
          <CalendarTwoTone />
          <p>{interviewedAt}</p>
        </div>
        <div className={styles.detail}>
          <QuestionCircleTwoTone />
          <p>총 {totalQuestion}가지 질문</p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <TagListComponent label="직무" tagList={jobList} />
        <TagListComponent label="기술" tagList={techList} />
      </div>
    </div>
  );
}

export default memo(InterviewResultInfoComponent);
