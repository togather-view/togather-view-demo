import { memo, useMemo } from "react";
import { Button, Switch } from "antd";

// dummy
import { questionList } from "@dummy/question.data";
import { myAccount } from "@dummy/user.data";

// type
import { Question } from "@src/interface/interface";

// component
import LayoutComponent from "@src/components/common/Layout.component";
import QuestionListElement from "@src/components/question/QuestionListElement.component";
import QuestionAnswerComponent from "@src/components/question/QuestionAnswer.component";
import { answerList } from "@dummy/answer.data";

function QuestionDetailPage({ questionId }) {
  const question: Question = useMemo(() => {
    const idToInt = parseInt(questionId, 10);
    return questionList.find((x) => x.id === idToInt);
  }, [questionId]);

  return (
    <LayoutComponent>
      <section>
        <QuestionListElement question={question} />
        <Button>좋아요</Button>
      </section>
      <section>
        <textarea />
        <Button>등록</Button>
        <div>
          <p>다른 사람에게 답변을 공개할까요?</p>
          <Switch />
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
