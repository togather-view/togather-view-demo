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
        <QuestionAnswerComponent
          createdAt="2021년 3월 9일"
          createdBy={myAccount}
          contents="군인·군무원·경찰공무원 기타 법률이 정하는 자가 전투·훈련등 직무집행과 관련하여 받은 손해에 대하여는 법률이 정하는 보상외에 국가 또는 공공단체에 공무원의 직무상 불법행위로 인한 배상은 청구할 수 없다."
          likeCount={2}
        />
        <QuestionAnswerComponent
          createdAt="2021년 3월 9일"
          createdBy={myAccount}
          contents="대법원장은 국회의 동의를 얻어 대통령이 임명한다. 누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다. 국채를 모집하거나 예산외에 국가의 부담이 될 계약을 체결하려 할 때에는 정부는 미리 국회의 의결을 얻어야 한다."
          likeCount={2}
        />
        <QuestionAnswerComponent
          createdAt="2021년 3월 9일"
          createdBy={myAccount}
          contents="국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면 회기중 석방된다. 모든 국민은 자기의 행위가 아닌 친족의 행위로 인하여 불이익한 처우를 받지 아니한다."
          likeCount={2}
        />
        <QuestionAnswerComponent
          createdAt="2021년 3월 9일"
          createdBy={myAccount}
          contents="각급 선거관리위원회의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 모든 국민은 사생활의 비밀과 자유를 침해받지 아니한다. 이 헌법시행 당시의 대법원장과 대법원판사가 아닌 법관은 제1항 단서의 규정에 불구하고 이 헌법에 의하여 임명된 것으로 본다."
          likeCount={2}
        />
      </section>
    </LayoutComponent>
  );
}

export const getServerSideProps = async (ctx) => {
  const { questionId = "1" } = ctx.query;
  return { props: { questionId } };
};

export default memo(QuestionDetailPage);
