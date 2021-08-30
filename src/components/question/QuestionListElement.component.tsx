import { memo } from "react";
import Link from "next/link";

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
        <a>
          {/* 직군 */}
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
        </a>
      </Link>
    </div>
  );
}

export default memo(QuestionListElement);
