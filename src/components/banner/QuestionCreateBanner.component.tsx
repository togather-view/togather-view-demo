import { memo, useCallback, useState } from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

// components
import QuestionFormComponent from "@src/components/question/QuestionForm.component";
import BannerComponent from "@src/components/banner/Banner.component";

// styles
import styles from "@src/styles/components/Banner.module.scss";

function QuestionCreateBannerComponent({ color }) {
  const [visible, setVisible] = useState(false);

  const openForm = useCallback(() => setVisible(true), []);
  const closeForm = useCallback(() => setVisible(false), []);

  const showConfirm = useCallback(
    () =>
      Modal.confirm({
        title: "정말로 창을 닫을까요?",
        content: "작성 중이던 내용은 저장되지 않습니다.",
        icon: <ExclamationCircleOutlined />,
        onOk: closeForm,
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onCancel: () => {},
        okText: "닫기",
        cancelText: "취소",
      }),
    [closeForm],
  );

  return (
    <div className={styles.bannerWrap}>
      <button
        className={styles.buttonWithNoStyle}
        type="button"
        onClick={openForm}
      >
        <BannerComponent
          title="예상 질문 공유하기"
          description="다른 사람들과 예상 질문을 공유해보세요!"
          color={color}
          imgSrc="/static/illustrations/question.png"
        />
      </button>
      <Modal visible={visible} footer={null} onCancel={showConfirm}>
        <QuestionFormComponent closeForm={closeForm} />
      </Modal>
    </div>
  );
}

export default memo(QuestionCreateBannerComponent);
