import { cloneElement, memo, useMemo } from "react";
import { Button } from "antd";

import styles from "@src/styles/common.module.scss";

function IconButtonComponent({ icon, type = "default" }) {
  const iconClone = useMemo(
    () => cloneElement(icon, { className: styles.icon }),
    [icon],
  );

  return (
    <Button
      className={styles.button}
      icon={iconClone}
      shape="circle"
      type={type}
    />
  );
}

export default memo(IconButtonComponent);
