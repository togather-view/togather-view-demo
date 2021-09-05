import { memo, useCallback, useState } from "react";
import { Button, Modal } from "antd";

// components
import QuestionFormComponent from "@src/components/question/QuestionForm.component";

// styles
import styles from "@src/styles/pages/Main.module.scss";

function QuestionCreateBannerComponent() {
  const [visible, setVisible] = useState(true);

  const openForm = useCallback(() => setVisible(true), []);
  const closeForm = useCallback(() => setVisible(false), []);

  return (
    <div className={styles.box}>
      <h3>
        <span className={styles.emoji}>📝</span>
        다른 사람들과 예상 질문을 공유해보세요!
      </h3>
      <Button className={styles.button} type="primary" onClick={openForm}>
        예상 질문 공유하기
      </Button>
      <Modal visible={visible} footer={null} onCancel={closeForm}>
        <QuestionFormComponent />
      </Modal>
    </div>
  );
}

export default memo(QuestionCreateBannerComponent);
