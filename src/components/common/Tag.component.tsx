import { memo } from "react";
import { Tag } from "antd";

function TagComponent({ title, color }) {
  return (
    <Tag title={title} color={color}>
      {title}
    </Tag>
  );
}

export default memo(TagComponent);
