import { memo } from "react";
import { EyeOutlined, LikeOutlined, MessageOutlined } from "@ant-design/icons";

// component
import TagComponent from "@src/components/common/Tag.component";

// interface
import { Question } from "@src/interface/interface";

// styles
import styles from "@src/styles/components/Question.module.scss";
import { Avatar } from "antd";
import { myAccount } from "@dummy/user.data";

interface Props {
  question: Question;
}

function QuestionDetailComponent({ question }: Props) {
  return (
    <div className={styles.detailContainer}>
      <div className={styles.header}>
        <div className={styles.createdInfo}>
          <Avatar src={myAccount.avatarUrl} size="small" />
          <p className={styles.name}>
            {myAccount.familyName}
            {myAccount.firstName}
          </p>
        </div>
        <div className={styles.info}>
          <div className={styles.element}>
            <LikeOutlined className={styles.icon} />
            <div className={styles.count}>0</div>
          </div>
          <div className={styles.element}>
            <MessageOutlined className={styles.icon} />
            <div className={styles.count}>2</div>
          </div>
          <div className={styles.element}>
            <EyeOutlined className={styles.icon} />
            <div className={styles.count}>23</div>
          </div>
        </div>
      </div>
      {/*  질문 내용 */}
      <h3 className={styles.contents}>{question.contents}</h3>
      {/* 직군 */}
      <div className={styles.tagContainer}>
        <p className={styles.label}>관련 직군</p>
        <div className={styles.group}>
          {question.jobGroup.map((x) => (
            <span key={x.id}>{x.name}</span>
          ))}
        </div>
      </div>
      {/*  관련 기술 */}
      <div className={styles.tagContainer}>
        <p className={styles.label}>관련 기술</p>
        <div className={styles.techList}>
          {question.techList.map((x) => (
            <TagComponent key={x.id} title={x.name} color={x.color} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(QuestionDetailComponent);
