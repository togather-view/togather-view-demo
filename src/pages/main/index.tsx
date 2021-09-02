import { memo } from "react";
import { Button } from "antd";

import LayoutComponent from "@src/components/common/Layout.component";
import QuestionListElement from "@src/components/question/QuestionListElement.component";

import styles from "@src/styles/pages/Main.module.scss";
import { questionList } from "@dummy/question.data";
import Link from "next/link";

function MainPage() {
  return (
    <LayoutComponent>
      <div className={styles.banner}>
        <div className={styles.box}>
          <h3>
            <span className={styles.emoji}>📝</span>예진님을 위해 준비된 면접에
            참여해보세요!
          </h3>
          <Link href="/interview">
            <a>
              <Button className={styles.button} type="primary">
                면접 시작하기
              </Button>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.container}>
        {/*    Question List   */}
        <div className={styles.listWrap}>
          {questionList.map((x) => (
            <QuestionListElement key={x.id} question={x} />
          ))}
        </div>
        <div className={styles.sideWrap}>{/*    Filter          */}</div>
      </div>
    </LayoutComponent>
  );
}

export default memo(MainPage);
