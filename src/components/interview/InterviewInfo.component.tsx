import { memo, useMemo } from "react";

// interface
import { JobGroup, Tech } from "@src/interface/interface";

// components
import InterviewConditionIconContainerComponent from "@src/components/interview/InterviewConditionIconConatiner.component";
import TagListComponent from "@src/components/common/TagList.component";

// styles
import styles from "@src/styles/pages/InterviewMessenger.module.scss";

interface Props {
  totalQuestion: number;
  nowIndex: number;
  jobList: JobGroup[];
  techList: Tech[];
}

function InterviewInfoComponent({
  totalQuestion,
  nowIndex,
  jobList,
  techList,
}: Props) {
  const progressStyle = useMemo(
    () => ({ width: `${(nowIndex / totalQuestion) * 100}%` }),
    [nowIndex, totalQuestion],
  );

  const progress = useMemo(
    () => `${Math.ceil((nowIndex / totalQuestion) * 100)}%`,
    [nowIndex, totalQuestion],
  );

  return (
    <div className={styles.info}>
      {/* 진행도 */}
      <div className={styles.progress}>
        <div className={styles.background}>
          <div className={styles.inner} style={progressStyle}>
            <p>{progress}</p>
          </div>
        </div>
        <p className={styles.description}>
          총 {totalQuestion}개 질문 중 {nowIndex}개 진행
        </p>
      </div>

      <div className={styles.divider}>
        <hr />
      </div>
      {/* Interview Details */}
      <InterviewConditionIconContainerComponent
        useTimer
        containAttitude={false}
      />
      <TagListComponent label="직무" tagList={jobList} />
      <TagListComponent label="기술" tagList={techList} />
    </div>
  );
}

export default memo(InterviewInfoComponent);
