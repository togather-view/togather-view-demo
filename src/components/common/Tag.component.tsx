import { memo } from "react";
import { Tag } from "antd";

function TagComponent({ className = "", title, color = "", onClick = null }) {
  return (
    <Tag className={className} title={title} color={color} onClick={onClick}>
      {title}
    </Tag>
  );
}

export default memo(TagComponent);
