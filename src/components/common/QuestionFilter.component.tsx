import { memo, useState } from "react";
import { Radio } from "antd";

// dummy
import { GroupList } from "@dummy/group.data";
import { myAccount } from "@dummy/user.data";
import { TechList } from "@dummy/tech.data";

// components
import TagSelectComponent from "@src/components/interview/TagSelect.component";

// styles
import styles from "@src/styles/components/QuestionFilter.module.scss";

import tagStyles from "@src/styles/components/TagSelect.module.scss";
import { QuestionSortType } from "@src/interface/interface";

function QuestionFilterComponent() {
  const [selectedJobList, setSelectedJobList] = useState(myAccount.jobList);
  const [selectedTechList, setSelectedTechList] = useState(myAccount.techList);

  return (
    <div className={styles.container}>
      <div className={styles.radioWrap}>
        <Radio.Group
          className={styles.radioGroup}
          value={QuestionSortType.LATEST}
        >
          <Radio.Button
            className={styles.button}
            value={QuestionSortType.LATEST}
          >
            최신순
          </Radio.Button>
          <Radio.Button className={styles.button} value={QuestionSortType.LIKE}>
            인기순
          </Radio.Button>
          <Radio.Button
            className={styles.button}
            value={QuestionSortType.COMMENT}
          >
            답변순
          </Radio.Button>
          <Radio.Button className={styles.button} value={QuestionSortType.VIEW}>
            조회순
          </Radio.Button>
        </Radio.Group>
      </div>
      <div className={styles.selectContainer}>
        <h4>직군</h4>
        <TagSelectComponent
          color="blue"
          selectedClassName={tagStyles.tagSelectedBlue}
          selectedList={selectedJobList}
          setSelectedList={setSelectedJobList}
          tagList={GroupList}
        />
      </div>
      <div className={styles.selectContainer}>
        <h4>기술</h4>
        <TagSelectComponent
          color="orange"
          selectedClassName={tagStyles.tagSelectedOrange}
          selectedList={selectedTechList}
          setSelectedList={setSelectedTechList}
          tagList={TechList}
        />
      </div>
    </div>
  );
}

export default memo(QuestionFilterComponent);
