import { memo, useCallback, useEffect, useState } from "react";
import { Radio, Button } from "antd";
import { ArrowRightOutlined, LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import _ from "lodash";

// components
import LayoutComponent from "@src/components/common/Layout.component";
import TagSelectComponent from "@src/components/interview/TagSelect.component";
import { InterviewFormSeo } from "@src/components/seo/Seo.component";

// dummy
import { GroupList } from "@dummy/group.data";
import { TechList } from "@dummy/tech.data";
import { myAccount } from "@dummy/user.data";

// styles
import styles from "@src/styles/pages/InterviewForm.module.scss";
import tagStyles from "@src/styles/components/TagSelect.module.scss";

function InterviewFormPage() {
  const router = useRouter();

  const [selectedJobList, setSelectedJobList] = useState(myAccount.jobList);
  const [selectedTechList, setSelectedTechList] = useState(myAccount.techList);
  const [allowDuplicated, setAllowDuplicated] = useState("true");

  const [interviewLoadingState, setInterviewLoadingState] = useState("NONE");

  const onSelectAllowDuplicated = useCallback(
    (e) => setAllowDuplicated(e.target.value),
    [],
  );

  const onClickStartInterview = useCallback(
    () => setInterviewLoadingState("LOADING"),
    [],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const routeNextPage = useCallback(
    _.debounce(() => {
      router.push("/interview/1");
    }, 3000),
    [],
  );

  useEffect(() => {
    if (interviewLoadingState === "LOADING") {
      routeNextPage();
    }
  }, [routeNextPage, interviewLoadingState]);

  return (
    <LayoutComponent showInterviewButton={false}>
      <InterviewFormSeo />
      <div className={styles.container}>
        <div className={styles.formBox}>
          {/* Title */}
          <div className={styles.title}>
            <h2>
              {myAccount.firstName}님의 면접을 시작할게요!
              <p>
                그 전에, {myAccount.firstName}님에 대해 몇 가지 더 알려주세요.
              </p>
            </h2>
          </div>
          {/* Select job group */}
          <div className={styles.formItem}>
            <p className={styles.label}>
              <b>지원하실 직군</b>을 선택해주세요.
            </p>
            <TagSelectComponent
              color="blue"
              tagList={GroupList}
              selectedList={selectedJobList}
              setSelectedList={setSelectedJobList}
              selectedClassName={tagStyles.tagSelectedBlue}
            />
          </div>
          {/* Select Techs */}
          <div className={styles.formItem}>
            <p className={styles.label}>
              이번에 집중적으로 연습하고 싶은 <b>기술/분야</b>를 선택해주세요.
            </p>
            <TagSelectComponent
              color="orange"
              tagList={TechList}
              selectedList={selectedTechList}
              setSelectedList={setSelectedTechList}
              selectedClassName={tagStyles.tagSelectedOrange}
            />
          </div>
          {/* Check if allow duplication */}
          <div className={styles.formItem}>
            <p className={styles.label}>저번에 했던 질문을 또 해도 될까요?</p>
            <Radio.Group
              className={styles.radioGroup}
              value={allowDuplicated}
              onChange={onSelectAllowDuplicated}
            >
              <Radio.Button className={styles.radioButton} value="true">
                <span className={styles.emoji}>🙆</span>또 해도 괜찮아요
              </Radio.Button>
              <Radio.Button className={styles.radioButton} value="false">
                <span className={styles.emoji}>🙅</span>새로운 질문만 주세요
              </Radio.Button>
            </Radio.Group>
          </div>
          {/* Start interview */}
          <Button
            className={styles.nextButton}
            type="primary"
            onClick={onClickStartInterview}
          >
            면접 시작하기
            <ArrowRightOutlined />
          </Button>
          <div className={styles.clearfix} />
        </div>
      </div>
      {interviewLoadingState === "LOADING" && (
        <div className={styles.loading}>
          <div className={styles.wrap}>
            <LoadingOutlined className={styles.icon} />
            <h2>{myAccount.firstName}님을 위한 면접을 준비하고 있습니다.</h2>
            <p>잠시만 기다려 주세요!</p>
          </div>
        </div>
      )}
    </LayoutComponent>
  );
}

export default memo(InterviewFormPage);
