import { memo } from "react";
import { Tooltip } from "antd";
import { ClockCircleOutlined, SmileOutlined } from "@ant-design/icons";

// styles
import styles from "@src/styles/pages/InterviewMessenger.module.scss";
import InterviewConditionIconComponent from "@src/components/interview/InterviewConditionIcon.component";

interface Props {
  useTimer: boolean;
  containAttitude: boolean;
}

function InterviewConditionIconContainerComponent({
  useTimer,
  containAttitude,
}: Props) {
  return (
    <div className={styles.iconContainer}>
      <Tooltip title="타이머 사용">
        <span>
          <InterviewConditionIconComponent
            icon={<ClockCircleOutlined size={80} />}
            active={useTimer}
          />
        </span>
      </Tooltip>
      <Tooltip title="인성 질문 미포함">
        <span>
          <InterviewConditionIconComponent
            icon={<SmileOutlined size={80} />}
            active={containAttitude}
          />
        </span>
      </Tooltip>
    </div>
  );
}

export default memo(InterviewConditionIconContainerComponent);
