import { memo, MutableRefObject, useCallback } from "react";
import { ArrowDownOutlined } from "@ant-design/icons";

// styles
import styles from "@src/styles/components/AlertNewMessage.module.scss";

interface Props {
  contents: string;
  bodyRef: MutableRefObject<HTMLInputElement>;
}

function AlertNewMessageComponent({ contents, bodyRef }: Props) {
  const onClick = useCallback(() => {
    if (bodyRef) bodyRef.current.scrollTo({ top: 0, behavior: "smooth" });
  }, [bodyRef]);

  return (
    <div className={styles.container}>
      <button type="button" className={styles.box} onClick={onClick}>
        <p className={styles.title}>새로운 메시지</p>
        <div className={styles.contents}>
          {contents}
          <ArrowDownOutlined />
        </div>
      </button>
    </div>
  );
}

export default memo(AlertNewMessageComponent);
