import { memo, useCallback, useMemo, useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";

// dummy
import { gFrontend } from "@dummy/group.data";
import { tJavascript } from "@dummy/tech.data";
import { myAccount } from "@dummy/user.data";

// type
import { QuestionSortType } from "@src/interface/interface";

// styles
import styles from "@src/styles/components/MobileQuestionFilter.module.scss";

function MobileQuestionFilterComponent() {
  const [sort, setSort] = useState(QuestionSortType.LATEST);
  const [selectedJobList, setSelectedJobList] = useState(myAccount.jobList);
  const [selectedTechList, setSelectedTechList] = useState(myAccount.techList);

  const onSelectSort = useCallback((e) => setSort(e.key), []);

  const menu = useMemo(
    () => (
      <Menu selectedKeys={[sort.toString()]} onClick={onSelectSort}>
        <Menu.Item key={QuestionSortType.LATEST.toString()}>최신순</Menu.Item>
        <Menu.Item key={QuestionSortType.LIKE.toString()}>인기순</Menu.Item>
        <Menu.Item key={QuestionSortType.COMMENT.toString()}>답변순</Menu.Item>
        <Menu.Item key={QuestionSortType.VIEW.toString()}>조회순</Menu.Item>
      </Menu>
    ),
    [onSelectSort, sort],
  );

  const selectedJob = useMemo(() => {
    if (selectedJobList.length === 0) {
      return <span className={styles.notSelected}>지원할 직군 선택하기</span>;
    }
    if (selectedJobList.length === 1) {
      return <span className={styles.selected}>{selectedJobList[0].name}</span>;
    }
    return (
      <span className={styles.selected}>{`${selectedJobList[0].name} 외 ${
        selectedJobList.length - 1
      }개`}</span>
    );
  }, [selectedJobList]);

  const selectedTech = useMemo(() => {
    if (selectedTechList.length === 0) {
      return <span className={styles.notSelected}>나의 주기술 선택하기</span>;
    }
    if (selectedTechList.length === 1) {
      return (
        <span className={styles.selected}>{selectedTechList[0].name}</span>
      );
    }
    return (
      <span className={styles.selected}>{`${selectedTechList[0].name} 외 ${
        selectedTechList.length - 1
      }개`}</span>
    );
  }, [selectedTechList]);

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <Dropdown overlay={menu}>
          <div className={styles.box}>
            <span className={styles.label}>정렬</span>
            <span className={styles.selected}>{sort}</span>
            <CaretDownOutlined />
          </div>
        </Dropdown>
        <div className={styles.box}>
          <span className={styles.label}>직군</span>
          <span className={styles.selected}>{selectedJob}</span>
          <CaretDownOutlined />
        </div>
        <div className={styles.box}>
          <span className={styles.label}>기술</span>
          {selectedTech}
          <CaretDownOutlined />
        </div>
      </div>
    </div>
  );
}

export default memo(MobileQuestionFilterComponent);
