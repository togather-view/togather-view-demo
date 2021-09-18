import { memo } from "react";

// styles
import styles from "@src/styles/components/Banner.module.scss";

function BannerComponent({ title, description }) {
  return (
    <div className={styles.box}>
      <h2 className={styles.subtitle}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default memo(BannerComponent);
