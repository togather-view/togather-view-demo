import { memo, useMemo } from "react";
import { Tag } from "antd";

import classNames from "classnames";

import styles from "@src/styles/components/Tag.module.scss";

function TagComponent({ className = "", title, color = "", onClick = null }) {
  const cn = useMemo(() => classNames(className, styles.tag), [className]);
  return (
    <Tag className={cn} title={title} color={color} onClick={onClick}>
      {title}
    </Tag>
  );
}

export default memo(TagComponent);
