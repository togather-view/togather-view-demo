import { memo } from "react";

import LayoutComponent from "@src/components/common/Layout.component";
import InterviewStartBannerComponent from "@src/components/banner/InterviewStartBanner.component";
import QuestionCreateBannerComponent from "@src/components/banner/QuestionCreateBanner.component";
import QuestionFilterComponent from "@src/components/common/QuestionFilter.component";
import QuestionListElement from "@src/components/question/QuestionListElement.component";

// dummy
import { questionList } from "@dummy/question.data";

import styles from "@src/styles/pages/Main.module.scss";

function MainPage() {
  return (
    <LayoutComponent>
      <div className={styles.banner}>
        <InterviewStartBannerComponent />
        <QuestionCreateBannerComponent />
      </div>
      <div className={styles.container}>
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
