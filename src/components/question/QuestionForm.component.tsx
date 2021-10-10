import { memo, useCallback, useState } from "react";
import { Button, Input } from "antd";

// dummy
import { GroupList } from "@dummy/group.data";
import { TechList } from "@dummy/tech.data";

// components
import TagSelectComponent from "@src/components/common/TagSelect.component";

// styles
import styles from "@src/styles/components/QuestionForm.module.scss";
import tagStyles from "@src/styles/components/TagSelect.module.scss";

function QuestionFormComponent({ closeForm }) {
  const [selectedJobList, setSelectedJobList] = useState([]);
  const [selectedTechList, setSelectedTechList] = useState([]);
  const [contents, setContents] = useState("");

  const onChangeContents = useCallback((e) => setContents(e.value), []);

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>예상 질문 공유하기</h2>
      <h3>질문 내용</h3>
      <Input.TextArea rows={4} onChange={onChangeContents} value={contents} />
      <div className={tagStyles.selectContainer}>
        <h3>직군</h3>
        <TagSelectComponent
          color="blue"
          selectedClassName={tagStyles.tagSelectedBlue}
          selectedList={selectedJobList}
          setSelectedList={setSelectedJobList}
          tagList={GroupList}
        />
      </div>
      <div className={tagStyles.selectContainer}>
        <h3>기술</h3>
        <TagSelectComponent
          color="orange"
          selectedClassName={tagStyles.tagSelectedOrange}
          selectedList={selectedTechList}
          setSelectedList={setSelectedTechList}
          tagList={TechList}
        />
      </div>
      <Button className={styles.submit} type="primary" onClick={closeForm}>
        공유하기
      </Button>
    </div>
  );
}

export default memo(QuestionFormComponent);
