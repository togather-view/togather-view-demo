import { memo } from "react";
import { Avatar } from "antd";
import { LikeOutlined } from "@ant-design/icons";

// interface
import { User } from "@src/interface/interface";

interface props {
  createdBy: User;
  createdAt: string;
  contents: string;
  likeCount: number;
}

function QuestionAnswerComponent({
  createdBy,
  createdAt,
  contents,
  likeCount,
}: props) {
  return (
    <div>
      <div>
        <Avatar src={createdBy.avatarUrl} />{" "}
        <p>
          {createdBy.familyName}
          {createdBy.firstName}
        </p>
      </div>
      <p>{contents}</p>
      <p>{createdAt}</p>
      <div>
        <LikeOutlined />
        <span>{likeCount}</span>
      </div>
    </div>
  );
}

export default memo(QuestionAnswerComponent);
