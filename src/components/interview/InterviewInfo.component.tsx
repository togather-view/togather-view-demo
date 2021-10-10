import { memo, useMemo } from "react";
import { FiClock, FiSmile } from "react-icons/all";

// interface
import { JobGroup, Tech } from "@src/interface/interface";

// component
import TagComponent from "@src/components/common/Tag.component";

// styles
import styles from "@src/styles/pages/InterviewMessenger.module.scss";
import IconWithTooltipComponent from "@src/components/common/IconWithTooltip.component";
import { Tooltip } from "antd";

interface Props {
  jobList: JobGroup[];
  techList: Tech[];
}

function InterviewInfoComponent({ jobList, techList }: Props) {
  const progressStyle = useMemo(() => ({ width: 100 }), []);

  return (
    <div className={styles.infoWrap}>
      <h1>투게더뷰</h1>
      {/* Progress bar */}
      <div className={styles.progress}>
        <div className={styles.background}>
          <div className={styles.inner} style={progressStyle}>
            <p>40%</p>
          </div>
        </div>
        <p className={styles.description}>총 10개 질문 중 4개 진행</p>
      </div>

      <div className={styles.divider}>
        <hr />
      </div>
      {/* Interview Details */}
      <div className={styles.iconContainer}>
        <Tooltip title="타이머 사용">
          <FiClock className={styles.active} size={25} />
        </Tooltip>
        <Tooltip title="인성 질문 미포함">
          <FiSmile className={styles.inactive} size={25} />
        </Tooltip>
      </div>
      <div className={styles.tagList}>
        <span className={styles.label}>직무</span>
        {jobList.map((x) => (
          <TagComponent title={x.name} key={x.id} />
        ))}
      </div>
      <div className={styles.tagList}>
        <span className={styles.label}>기술</span>
        {techList.map((x) => (
          <TagComponent title={x.name} color={x.color} key={x.id} />
        ))}
      </div>
    </div>
  );
}

export default memo(InterviewInfoComponent);
