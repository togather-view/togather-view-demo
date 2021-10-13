import { memo, useMemo } from "react";

import styles from "@src/styles/pages/InterviewMessenger.module.scss";

interface Props {
  icon: JSX.Element;
  active: boolean;
}

function InterviewConditionIconComponent({ icon, active }: Props) {
  const className = useMemo(
    () => (active ? styles.active : styles.inactive),
    [active],
  );

  return <div className={className}>{icon}</div>;
}

export default memo(InterviewConditionIconComponent);
