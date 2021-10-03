import { memo, useCallback, useMemo, useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Modal } from "antd";

// dummy
import { GroupList } from "@dummy/group.data";
import { TechList } from "@dummy/tech.data";
import { myAccount } from "@dummy/user.data";

// type
import { QuestionSortType } from "@src/interface/interface";

// styles
import styles from "@src/styles/components/MobileQuestionFilter.module.scss";
import TagSelectComponent from "@src/components/interview/TagSelect.component";
import tagStyles from "@src/styles/components/TagSelect.module.scss";

function MobileQuestionFilterComponent() {
  const [sort, setSort] = useState(QuestionSortType.LATEST);
  const [selectedJobList, setSelectedJobList] = useState(myAccount.jobList);
  const [selectedTechList, setSelectedTechList] = useState(myAccount.techList);

  const [visible, setVisible] = useState(false);
  const onClose = useCallback(() => setVisible(false), []);
  const onOpen = useCallback(() => setVisible(true), []);
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
        <button className={styles.box} type="button" onClick={onOpen}>
          <span className={styles.label}>직군</span>
          {selectedJob}
          <CaretDownOutlined />
        </button>
        <button className={styles.box} type="button" onClick={onOpen}>
          <span className={styles.label}>기술</span>
          {selectedTech}
          <CaretDownOutlined />
        </button>
      </div>

      <Modal
        visible={visible}
        onCancel={onClose}
        footer={null}
        closable={false}
      >
        <div className={styles.selectContainer}>
          <TagSelectComponent
            color="blue"
            selectedClassName={tagStyles.tagSelectedBlue}
            selectedList={selectedJobList}
            setSelectedList={setSelectedJobList}
            tagList={GroupList}
          />
        </div>
        <br />
        <div className={styles.selectContainer}>
          <TagSelectComponent
            color="orange"
            selectedClassName={tagStyles.tagSelectedOrange}
            selectedList={selectedTechList}
            setSelectedList={setSelectedTechList}
            tagList={TechList}
          />
        </div>
      </Modal>
    </div>
  );
}

export default memo(MobileQuestionFilterComponent);
