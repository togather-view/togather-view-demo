import { memo } from "react";
import Link from "next/link";
import { Button } from "antd";

// dummy
import { myAccount } from "@dummy/user.data";

// styles
import styles from "@src/styles/pages/Main.module.scss";

function InterviewStartBannerComponent() {
  return (
    <div className={styles.box}>
      <h3>
        <span className={styles.emoji}>💁‍</span>
        {myAccount.firstName}님을 위해 준비된 면접에 참여해보세요!
      </h3>
      <Link href="/interview">
        <a>
          <Button className={styles.button} type="primary">
            면접 시작하기
          </Button>
        </a>
      </Link>
    </div>
  );
}

export default memo(InterviewStartBannerComponent);
