import { memo } from "react";

// components
import TagComponent from "@src/components/common/Tag.component";

// styles
import styles from "@src/styles/pages/InterviewMessenger.module.scss";
import { JobGroup, Tech } from "@src/interface/interface";

interface Props {
  label: string;
  tagList: JobGroup[] | Tech[];
}

function TagListComponent({ label, tagList }: Props) {
  return tagList.length > 0 ? (
    <div className={styles.tagList}>
      <span className={styles.label}>{label}</span>
      {tagList.map((x) => (
        <TagComponent title={x.name} key={x.id} color={x.color || ""} />
      ))}
    </div>
  ) : (
    <></>
  );
}

export default memo(TagListComponent);
