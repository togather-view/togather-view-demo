import { memo } from "react";

// interface
import { JobGroup, Tech, User } from "@src/interface/interface";

// component
import TagComponent from "@src/components/common/Tag.component";

// styles
import styles from "@src/styles/pages/InterviewMessenger.module.scss";

interface Props {
  user: User;
  jobList: JobGroup[];
  techList: Tech[];
}

function InterviewInfoComponent({ user, jobList, techList }: Props) {
  return (
    <div className={styles.infoWrap}>
      <h1>투게더뷰</h1>
      <h2>{user.firstName}님의 면접</h2>
      <div className={styles.tagList}>
        <h3>선택한 직무</h3>
        {jobList.map((x) => (
          <TagComponent title={x.name} key={x.id} />
        ))}
      </div>
      <div className={styles.tagList}>
        <h3>선택한 기술</h3>
        {techList.map((x) => (
          <TagComponent title={x.name} color={x.color} key={x.id} />
        ))}
      </div>
    </div>
  );
}

export default memo(InterviewInfoComponent);
