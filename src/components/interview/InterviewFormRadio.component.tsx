import styles from "@src/styles/pages/InterviewForm.module.scss";
import { Radio } from "antd";

function InterviewFormRadioComponent({ value, onChange, label }) {
  return (
    <div className={styles.formItem}>
      <p className={styles.label}>{label}</p>
      <Radio.Group
        className={styles.radioGroup}
        value={value}
        onChange={onChange}
      >
        <Radio.Button className={styles.radioButton} value="true">
          <span className={styles.emoji}>🙆</span>또 해도 괜찮아요
        </Radio.Button>
        <Radio.Button className={styles.radioButton} value="false">
          <span className={styles.emoji}>🙅</span>새로운 질문만 주세요
        </Radio.Button>
      </Radio.Group>
    </div>
  );
}

export default InterviewFormRadioComponent;
