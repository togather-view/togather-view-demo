import { memo } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

// lib
import { JobGroup, Tech } from "@src/interface/interface";
import useVisible from "@src/hooks/useVisible.hook";

// components
import MessengerInterviewInfoWrapperComponent from "@src/components/interview/MessengerInterviewInfoWrapper.component";

// styles
import styles from "@src/styles/pages/InterviewMessenger.module.scss";

interface Props {
  jobList: JobGroup[];
  techList: Tech[];
}
function InterviewMessengerHeaderComponent({ jobList, techList }: Props) {
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
        <MessengerInterviewInfoWrapperComponent
          jobList={jobList}
          techList={techList}
        />
      </Drawer>
    </header>
  );
}

export default memo(InterviewMessengerHeaderComponent);
