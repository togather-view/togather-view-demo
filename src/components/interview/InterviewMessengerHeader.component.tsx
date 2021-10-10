import { memo } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

// lib
import useVisible from "@src/hooks/useVisible.hook";

// components
import InterviewInfoComponent from "@src/components/interview/InterviewInfo.component";

// styles
import styles from "@src/styles/pages/InterviewMessenger.module.scss";
import { JobGroup, Tech } from "@src/interface/interface";

interface Props {
  totalQuestion: number;
  nowIndex: number;
  jobList: JobGroup[];
  techList: Tech[];
}
function InterviewMessengerHeaderComponent({
  totalQuestion,
  nowIndex,
  jobList,
  techList,
}: Props) {
  const [infoVisible, , setInfoInvisible, toggleInfoVisible] =
    useVisible(false);

  return (
    <header>
      <h1>투게더뷰</h1>
      <DownOutlined className={styles.icon} onClick={toggleInfoVisible} />
      <Drawer
        className={styles.infoDrawer}
        placement="top"
        closeIcon={null}
        visible={infoVisible}
        onClose={setInfoInvisible}
      >
        <InterviewInfoComponent
          totalQuestion={totalQuestion}
          nowIndex={nowIndex}
          jobList={jobList}
          techList={techList}
        />
      </Drawer>
    </header>
  );
}

export default memo(InterviewMessengerHeaderComponent);
