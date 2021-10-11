import { memo } from "react";
import { ArrowDownOutlined } from "@ant-design/icons";

// styles
import styles from "@src/styles/components/AlertNewMessage.module.scss";

interface Props {
  contents: string;
}

function AlertNewMessageComponent({ contents }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p className={styles.title}>새로운 메시지</p>
        <div className={styles.contents}>
          {contents}
          <ArrowDownOutlined />
        </div>
      </div>
    </div>
  );
}

export default memo(AlertNewMessageComponent);
