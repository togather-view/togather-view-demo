import { memo } from "react";
import Link from "next/link";
import { Button } from "antd";

// dummy
import { myAccount } from "@dummy/user.data";

// styles
import styles from "@src/styles/pages/Main.module.scss";

function QuestionCreateBannerComponent() {
  return (
    <div className={styles.box}>
      <h3>
        <span className={styles.emoji}>📝</span>
        다른 사람들과 예상 질문을 공유해보세요!
      </h3>
      <Link href="/interview">
        <a>
          <Button className={styles.button} type="primary">
            예상 질문 공유하기
          </Button>
        </a>
      </Link>
    </div>
  );
}

export default memo(QuestionCreateBannerComponent);
