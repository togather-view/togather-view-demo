import { memo } from "react";
import styles from "@src/styles/components/LoadingDots.module.scss";

function LoadingDotsComponent() {
  return (
    <div className={styles.wrap}>
      <div className={styles.ball1} />
      <div className={styles.ball2} />
      <div className={styles.ball3} />
    </div>
  );
}

export default memo(LoadingDotsComponent);
