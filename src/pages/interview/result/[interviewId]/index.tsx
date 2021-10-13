import { memo } from "react";
import { CalendarTwoTone, QuestionCircleTwoTone } from "@ant-design/icons";

// components
import LayoutComponent from "@src/components/common/Layout.component";
import InterviewConditionIconContainerComponent from "@src/components/interview/InterviewConditionIconConatiner.component";

// styles
import styles from "@src/styles/pages/InterviewResult.module.scss";
import TagListComponent from "@src/components/common/TagList.component";
import { myAccount } from "@dummy/user.data";

function InterviewResultPage() {
  return (
    <LayoutComponent>
      <div className={styles.container}>
        <div className={styles.info}>
          <InterviewConditionIconContainerComponent useTimer containAttitude />
          <div className={styles.wrapper}>
            <div className={styles.detail}>
              <CalendarTwoTone />
              <p>2021년 10월 3일</p>
            </div>
            <div className={styles.detail}>
              <QuestionCircleTwoTone />
              <p>총 10가지 질문</p>
            </div>
          </div>
          <div className={styles.wrapper}>
            <TagListComponent label="직무" tagList={myAccount.jobList} />
            <TagListComponent label="기술" tagList={myAccount.techList} />
          </div>
        </div>
        <div className={styles.list}>list</div>
      </div>
    </LayoutComponent>
  );
}

export default memo(InterviewResultPage);
