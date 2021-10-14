import { memo, useMemo } from "react";
import Link from "next/link";
import { Button, Switch } from "antd";

// lib
import { QuestionToAnswer } from "@src/interface/interface";

// components
import TagComponent from "@src/components/common/Tag.component";

// styles
import styles from "@src/styles/pages/InterviewResult.module.scss";

interface Props {
  index: number;
  questionToAnswer: QuestionToAnswer;
}

function InterviewResultQuestionComponent({ index, questionToAnswer }: Props) {
  const techListDOM = useMemo(
    () => (
      <div className={styles.tagList}>
        {questionToAnswer.question.techList.map((t) => (
          <TagComponent key={t.id} title={t.name} color={t.color} />
        ))}
      </div>
    ),
    [questionToAnswer],
  );

  const jobListDOM = useMemo(
    () => (
      <div className={styles.tagList}>
        {questionToAnswer.question.jobGroup.map((t) => (
          <span key={t.id}>{t.name}</span>
        ))}
      </div>
    ),
    [questionToAnswer],
  );

  const buttonContainerDOM = useMemo(
    () => (
      <div className={styles.iconContainer}>
        <Link href={`/question/${questionToAnswer.question.id}`}>
          <a>
            <Button
              icon={<span className={styles.icon}>👀</span>}
              shape="circle"
            />
          </a>
        </Link>
        <Button icon={<span className={styles.icon}>👍</span>} shape="circle" />
        <Button icon={<span className={styles.icon}>🔖</span>} shape="circle" />
        <Button icon={<span className={styles.icon}>🚨</span>} shape="circle" />
      </div>
    ),
    [questionToAnswer.question.id],
  );

  return (
    <div key={questionToAnswer.id}>
      {/* 질문 */}
      <div>
        {/* 질문 헤더 */}
        <div className={styles.header}>
          <div className={styles.tagContainer}>
            {techListDOM}
            {jobListDOM}
          </div>
          {buttonContainerDOM}
        </div>
        {/* 질문 내용 */}
        <div className={styles.contents}>
          <h3>{`${index}. ${questionToAnswer.question.contents}`}</h3>
        </div>
      </div>
      {/* 답변 내용 */}
      <div className={styles.answer}>{questionToAnswer.answer.contents}</div>
      {/* 답변 조작 */}
      <div className={styles.switch}>
        <p>답변을 다른 사람에게 공개할까요?</p>
        <Switch size="small" />
      </div>
      <hr />
    </div>
  );
}

export default memo(InterviewResultQuestionComponent);
