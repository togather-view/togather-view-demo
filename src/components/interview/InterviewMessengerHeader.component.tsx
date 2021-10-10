import { memo } from "react";
import { Avatar } from "antd";

// styles
import styles from "@src/styles/pages/InterviewMessenger.module.scss";

function InterviewMessengerHeaderComponent() {
  return (
    <header>
      <div className={styles.title}>
        <div className={styles.avatar}>
          <Avatar src="/static/interviewer.png" size={36} />
        </div>
        <p className={styles.name}>면접관</p>
      </div>
    </header>
  );
}

export default memo(InterviewMessengerHeaderComponent);
