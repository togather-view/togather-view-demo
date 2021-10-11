import { memo, useContext, useMemo } from "react";
import { Tooltip } from "antd";
import { ClockCircleOutlined, SmileOutlined } from "@ant-design/icons";

// interface
import { JobGroup, Tech } from "@src/interface/interface";

// lib
import MessengerContext from "@src/context/Messenger.context";

// component
import TagComponent from "@src/components/common/Tag.component";

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
      <div className={styles.iconContainer}>
        <Tooltip title="타이머 사용">
          <ClockCircleOutlined className={styles.active} size={80} />
        </Tooltip>
        <Tooltip title="인성 질문 미포함">
          <SmileOutlined className={styles.inactive} size={80} />
        </Tooltip>
      </div>
      {jobList.length > 0 && (
        <div className={styles.tagList}>
          <span className={styles.label}>직무</span>
          {jobList.map((x) => (
            <TagComponent title={x.name} key={x.id} />
          ))}
        </div>
      )}
      {techList.length > 0 && (
        <div className={styles.tagList}>
          <span className={styles.label}>기술</span>
          {techList.map((x) => (
            <TagComponent title={x.name} color={x.color} key={x.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default memo(InterviewInfoComponent);
