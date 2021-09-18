import { memo } from "react";

import LayoutComponent from "@src/components/common/Layout.component";
import InterviewStartBannerComponent from "@src/components/banner/InterviewStartBanner.component";
import QuestionCreateBannerComponent from "@src/components/banner/QuestionCreateBanner.component";
import MobileQuestionFilterComponent from "@src/components/common/MobileQuestionFilter.component";
import QuestionFilterComponent from "@src/components/common/QuestionFilter.component";
import QuestionListElement from "@src/components/question/QuestionListElement.component";

// dummy
import { questionList } from "@dummy/question.data";

import styles from "@src/styles/pages/Main.module.scss";
import BannerComponent from "@src/components/banner/Banner.component";

function MainPage() {
  return (
    <LayoutComponent>
      <div className={styles.banner}>
        <BannerComponent
          title="면접 시작하기"
          description="예준님을 위해 준비된 면접에 참여해보세요!"
          path="/interview"
        />
        <BannerComponent
          title="질문 공유하기"
          description="다른 사람들과 예상 질문을 공유해보세요!"
          path="/interview"
        />
        <BannerComponent
          title="질문 공유하기"
          description="다른 사람들과 예상 질문을 공유해보세요!"
          path="/interview"
        />
        {/* <InterviewStartBannerComponent /> */}
        {/* <QuestionCreateBannerComponent /> */}
      </div>
      <div className={styles.container}>
        <MobileQuestionFilterComponent />
        {/*    Question List   */}
        <div className={styles.listWrap}>
          {questionList.map((x) => (
            <QuestionListElement key={x.id} question={x} />
          ))}
        </div>
        <div className={styles.sideWrap}>
          {/*    Filter          */}
          <QuestionFilterComponent />
        </div>
      </div>
    </LayoutComponent>
  );
}

export default memo(MainPage);
