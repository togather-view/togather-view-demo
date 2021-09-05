import { memo, useMemo } from "react";
import { Button, Switch } from "antd";
import { LikeOutlined } from "@ant-design/icons";

// dummy
import { questionList } from "@dummy/question.data";
import { answerList } from "@dummy/answer.data";

// type
import { Question } from "@src/interface/interface";

// component
import LayoutComponent from "@src/components/common/Layout.component";
import QuestionListElement from "@src/components/question/QuestionListElement.component";
import QuestionAnswerComponent from "@src/components/question/QuestionAnswer.component";

// styles
import styles from "@src/styles/pages/QuestionDetail.module.scss";

function QuestionDetailPage({ questionId }) {
  const question: Question = useMemo(() => {
    const idToInt = parseInt(questionId, 10);
    return questionList.find((x) => x.id === idToInt);
  }, [questionId]);

  return (
    <LayoutComponent>
      <section>
        <QuestionListElement question={question} />
        <Button className={styles.likeQuestionButton} type="text">
          이 질문을 추천합니다! <LikeOutlined className={styles.icon} />
        </Button>
      </section>
      <section className={styles.answerInput}>
        <h2>나의 답변 작성하기</h2>
        <div className={styles.inputArea}>
          <textarea className={styles.textArea} />
          <Button className={styles.submitButton}>작성</Button>
        </div>
        <div className={styles.confirmShare}>
          <p className={styles.message}>다른 사람에게 답변을 공개할까요?</p>
          <Switch className={styles.switch} />
        </div>
      </section>
      <section>
        <h2>다른 사람의 답변 보기</h2>
        {answerList.map((x) => (
          <QuestionAnswerComponent key={x.id} answer={x} />
        ))}
      </section>
    </LayoutComponent>
  );
}

export const getServerSideProps = async (ctx) => {
  const { questionId = "1" } = ctx.query;
  return { props: { questionId } };
};

export default memo(QuestionDetailPage);
