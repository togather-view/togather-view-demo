import { memo, useMemo } from "react";
import { Avatar } from "antd";

// interface
import { User } from "@src/interface/interface";

// component
import TagComponent from "@src/components/common/Tag.component";

// styles
import styles from "@src/styles/pages/Profile.module.scss";

interface props {
  profile: User;
  questionCount: number;
  answerCount: number;
  bookmarkCount: number;
}

function ProfileCardComponent({
  profile,
  questionCount,
  answerCount,
  bookmarkCount,
}: props) {
  const jobListDOM = useMemo(
    () =>
      profile.jobList.map((x) => (
        <p key={x.id} className={styles.job}>
          {x.name}
        </p>
      )),
    [profile.jobList],
  );

  const techListDOM = useMemo(
    () =>
      profile.techList.map((x) => (
        <TagComponent key={x.id} title={x.name} color={x.color} />
      )),
    [profile.techList],
  );

  return (
    <div className={styles.profile}>
      <div>
        <Avatar src={profile.avatarUrl} size={120} shape="square" />
      </div>
      <div className={styles.info}>
        <p className={styles.name}>
          {profile.familyName}
          {profile.firstName}
        </p>
        <div className={styles.tagList}>{jobListDOM}</div>
        <div className={styles.tech}>
          <div className={styles.tagList}>{techListDOM}</div>
        </div>
      </div>
      <div className={styles.countWrap}>
        <div>
          <p>답변 작성</p>
          <p>{answerCount}</p>
        </div>
        <div>
          <p>질문 공유</p>
          <p>{questionCount}</p>
        </div>
        <div>
          <p>북마크</p>
          <p>{bookmarkCount}</p>
        </div>
      </div>
    </div>
  );
}

export default memo(ProfileCardComponent);
