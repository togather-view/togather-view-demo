import { memo, useCallback, useMemo, useState } from "react";
import { Avatar } from "antd";
import { LikeFilled, LikeOutlined } from "@ant-design/icons";

// interface
import { Answer } from "@src/interface/interface";

import styles from "@src/styles/components/QuestionAnswer.module.scss";

interface props {
  answer: Answer;
}

function QuestionAnswerComponent({ answer }: props) {
  const [liked, setLiked] = useState(false);
  const onClickLike = useCallback(() => setLiked(!liked), [liked]);
  const displayedLikeCount = useMemo(
    () => answer.likeCount + (liked ? 1 : 0),
    [answer.likeCount, liked],
  );
  const likeIcon = useMemo(
    () =>
      liked ? (
        <LikeFilled className={styles.icon} />
      ) : (
        <LikeOutlined className={styles.icon} />
      ),
    [liked],
  );
  return (
    <div className={styles.questionAnswerWrap}>
      <div className={styles.header}>
        <div>
          <Avatar src={answer.createdBy.avatarUrl} />
        </div>
        <p className={styles.name}>
          {answer.createdBy.familyName}
          {answer.createdBy.firstName}
        </p>
      </div>
      <div className={styles.body}>
        <p className={styles.contents}>{answer.contents}</p>
      </div>
      <div className={styles.footer}>
        <p className={styles.createdAt}>{answer.createdAt}</p>
        <button className={styles.like} type="button" onClick={onClickLike}>
          {likeIcon}
          <span className={styles.count}>{displayedLikeCount}</span>
        </button>
      </div>
    </div>
  );
}

export default memo(QuestionAnswerComponent);
