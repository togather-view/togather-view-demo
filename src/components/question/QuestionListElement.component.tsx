import { memo, useMemo } from "react";
import Link from "next/link";
import { EyeOutlined, LikeOutlined, MessageOutlined } from "@ant-design/icons";

import TagComponent from "@src/components/common/Tag.component";

import { Question } from "@src/interface/interface";

import styles from "@src/styles/components/Question.module.scss";

interface Props {
  question: Question;
}

function QuestionListElement({ question }: Props) {
  return (
    <div className={styles.listElementContainer}>
      <Link href={`/question/${question.id}`}>
        <a className={styles.wrap}>
          {/* 직군 */}
          <div>
            <div className={styles.group}>
              {question.jobGroup.map((x) => (
                <span key={x.id}>{x.name}</span>
              ))}
            </div>
            <div />
            {/*  질문 내용 */}
            <h3 className={styles.title}>{question.contents}</h3>
            {/*  관련 기술 */}
            <div className={styles.techList}>
              {question.techList.map((x) => (
                <TagComponent key={x.id} title={x.name} color={x.color} />
              ))}
            </div>
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
        </a>
      </Link>
    </div>
  );
}

export default memo(QuestionListElement);
