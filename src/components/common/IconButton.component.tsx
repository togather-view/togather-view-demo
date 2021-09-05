import { cloneElement, memo, ReactElement, useMemo } from "react";
import { ButtonType } from "antd/lib/button/button";
import { Button } from "antd";

import styles from "@src/styles/common.module.scss";

interface props {
  icon: ReactElement;
  type: ButtonType;
}

function IconButtonComponent({ icon, type = "default" }: props) {
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
