import { memo } from "react";
import { CaretDownOutlined } from "@ant-design/icons";

// dummy
import { gFrontend } from "@dummy/group.data";
import { tJavascript } from "@dummy/tech.data";

// styles
import styles from "@src/styles/components/MobileQuestionFilter.module.scss";

function MobileQuestionFilterComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.box}>
          <span className={styles.label}>정렬</span>
          <span className={styles.selected}>최신순</span>
          <CaretDownOutlined />
        </div>
        <div className={styles.box}>
          <span className={styles.label}>직군</span>
          <span className={styles.selected}>{gFrontend.name}</span>
          <CaretDownOutlined />
        </div>
        <div className={styles.box}>
          <span className={styles.label}>기술</span>
          <span className={styles.selected}>{tJavascript.name}</span>{" "}
          <CaretDownOutlined />
        </div>
      </div>
    </div>
  );
}

export default memo(MobileQuestionFilterComponent);
