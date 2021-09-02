import { memo, useCallback, useEffect, useState } from "react";
import { Radio, Button } from "antd";
import { ArrowRightOutlined, LoadingOutlined } from "@ant-design/icons";

// components
import LayoutComponent from "@src/components/common/Layout.component";
import TagSelectComponent from "@src/components/interview/TagSelect.component";

// dummy
import { GroupList } from "@dummy/group.data";
import { TechList } from "@dummy/tech.data";

import styles from "@src/styles/pages/InterviewForm.module.scss";

function InterviewFormPage() {
  const [selectedJobList, setSelectedJobList] = useState([]);
  const [selectedTechList, setSelectedTechList] = useState([]);
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

  return (
    <LayoutComponent showInterviewButton={false}>
      <div className={styles.container}>
        <div className={styles.formBox}>
          {/* Title */}
          <div className={styles.title}>
            <h2>
              예진님의 면접을 시작할게요!
              <p>그 전에, 예진님에 대해 몇 가지 더 알려주세요.</p>
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
              selectedClassName={styles.tagSelectedBlue}
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
              selectedClassName={styles.tagSelectedOrange}
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
        </div>
      </div>
      {interviewLoadingState === "LOADING" && (
        <div className={styles.loading}>
          <div className={styles.wrap}>
            <LoadingOutlined className={styles.icon} />
            <h2>예진님을 위한 면접을 준비하고 있습니다.</h2>
            <p>잠시만 기다려 주세요!</p>
          </div>
        </div>
      )}
    </LayoutComponent>
  );
}

export default memo(InterviewFormPage);
