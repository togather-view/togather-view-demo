import { memo } from "react";
import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

import styles from "@src/styles/pages/InterviewMessenger.module.scss";

const contents1 =
  "예비비는 총액으로 국회의 의결을 얻어야 한다. 예비비의 지출은 차기국회의 승인을 얻어야 한다.";
const contents2 =
  "국가는 청원에 대하여 심사할 의무를 진다. 학교교육 및 평생교육을 포함한 교육제도와 그 운영, 교육재정 및 교원의 지위에 관한 기본적인 사항은 법률로 정한다";
const contents3 =
  "예비비는 총액으로 국회의 의결을 얻어야 한다. 예비비의 지출은 차기국회의 승인을 얻어야 한다. 국가는 청원에 대하여 심사할 의무를 진다. 학교교육 및 평생교육을 포함한 교육제도와 그 운영, 교육재정 및 교원의 지위에 관한 기본적인 사항은 법률로 정한다";

function InterviewMessengerPage() {
  return (
    <div className={styles.container}>
      <header>
        <h3>예진님의 면접</h3>
        <Button className={styles.submit} type="link">
          완료
        </Button>
      </header>
      <main>
        <div className={styles.messenger}>
          <div className={styles.messageWrap}>
            <div className={styles.avatar}>
              <Avatar src="/static/interviewer.png" size={48} />
            </div>
            <div className={styles.message}>
              <p className={styles.name}>면접관</p>
              <p className={styles.contents}>{contents1}</p>
              <p className={styles.contents}>{contents2}</p>
              <p className={styles.contents}>{contents3}</p>
              <p className={styles.contents}>{contents1}</p>
              <p className={styles.contents}>{contents2}</p>
              <p className={styles.contents}>{contents3}</p>
              <p className={styles.contents}>{contents1}</p>
              <p className={styles.contents}>{contents2}</p>
              <p className={styles.contents}>{contents3}</p>
              <p className={styles.contents}>{contents1}</p>
              <p className={styles.contents}>{contents2}</p>
              <p className={styles.contents}>{contents3}</p>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <textarea />
        <Button type="link">전송</Button>
      </footer>
    </div>
  );
}

export default memo(InterviewMessengerPage);
