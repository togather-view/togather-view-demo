import { memo, useCallback, useMemo, useState } from "react";

import TagComponent from "@src/components/common/Tag.component";

import styles from "@src/styles/components/TagSelect.module.scss";

function TagSelectComponent({
  color,
  tagList,
  selectedList,
  setSelectedList,
  selectedClassName,
}) {
  const [idList, setIdList] = useState(selectedList.map((x) => x.id));

  const onClickTag = useCallback(
    (tag) => {
      const index = idList.indexOf(tag.id);
      if (index > -1) {
        setIdList(idList.filter((x) => x !== tag.id));
        setSelectedList(selectedList.filter((x) => x.id !== tag.id));
      } else {
        setIdList([...idList, tag.id]);
        setSelectedList([...selectedList, tag].sort((a, b) => a.id - b.id));
      }
    },
    [idList, selectedList, setSelectedList],
  );

  const tagListDOM = useMemo(
    () =>
      tagList.map((x) => {
        const onClick = () => onClickTag(x);
        const selected = idList.includes(x.id);
        return (
          <TagComponent
            key={x.id}
            className={styles.tag}
            title={
              <span className={selected ? selectedClassName : styles.tag}>
                # {x.name}
              </span>
            }
            onClick={onClick}
          />
        );
      }),
    [tagList, idList, selectedClassName, onClickTag],
  );

  const selectedListDOM = useMemo(
    () =>
      selectedList.map((x) => {
        const onClick = () => onClickTag(x);
        return (
          <TagComponent
            key={x.id}
            className={styles.tag}
            title={`# ${x.name}`}
            color={color}
            onClick={onClick}
          />
        );
      }),
    [color, onClickTag, selectedList],
  );

  return (
    <div>
      <div className={styles.tagContainer}>{tagListDOM}</div>
      <div className={styles.selectContainer}>{selectedListDOM}</div>
    </div>
  );
}

export default memo(TagSelectComponent);
