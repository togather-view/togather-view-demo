import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Avatar, Button } from "antd";
import _ from "lodash";

import LoadingDotsComponent from "@src/components/common/LoadingDots.component";

import styles from "@src/styles/pages/InterviewMessenger.module.scss";
import TagComponent from "@src/components/common/Tag.component";
import { myAccount } from "@dummy/user.data";

const contents1 =
  "예비비는 총액으로 국회의 의결을 얻어야 한다. 예비비의 지출은 차기국회의 승인을 얻어야 한다.";
const contents2 =
  "국가는 청원에 대하여 심사할 의무를 진다. 학교교육 및 평생교육을 포함한 교육제도와 그 운영, 교육재정 및 교원의 지위에 관한 기본적인 사항은 법률로 정한다";
const contents3 =
  "예비비는 총액으로 국회의 의결을 얻어야 한다. 예비비의 지출은 ";
// "차기국회의 승인을 얻어야 한다. 국가는 청원에 대하여 심사할 의무를 진다. 학교교육 및 평생교육을 포함한 교육제도와 그 운영, 교육재정 및 교원의 지위에 관한 기본적인 사항은 법률로 정한다";

const contentsList = [
  contents1,
  contents2,
  contents3,
  contents1,
  contents2,
  contents3,
  contents1,
  contents2,
  contents3,
  contents1,
  contents2,
  contents3,
];

function InterviewMessengerPage() {
  const [displayedMessages, setDisplayedMessages] = useState([]);

  const makeMessageDebounce = useCallback(
    (time) =>
      _.debounce(
        () =>
          setDisplayedMessages([
            ...displayedMessages,
            contentsList[displayedMessages.length],
          ]),
        time,
      ),
    [displayedMessages],
  );

  const messageList = useMemo(() => {
    const isLeft = contentsList.length > displayedMessages.length;
    const list = displayedMessages.map((x, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <p key={`message-list-${index}`} className={styles.contents}>
        {x}
      </p>
    ));
    if (isLeft) {
      list.push(
        <p className={styles.contents}>
          <LoadingDotsComponent />
        </p>,
      );
      const addDisplayMessage = makeMessageDebounce(
        contentsList[displayedMessages.length].length * 20,
      );
      addDisplayMessage();
    }
    return list;
  }, [displayedMessages, makeMessageDebounce]);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.infoWrap}>
          <h1>투게더뷰</h1>
          <h2>예진님의 면접</h2>
          <div className={styles.tagList}>
            <h3>선택한 직무</h3>
            {myAccount.jobList.map((x) => (
              <TagComponent title={x.name} key={x.id} />
            ))}
          </div>
          <div className={styles.tagList}>
            <h3>선택한 기술</h3>
            {myAccount.techList.map((x) => (
              <TagComponent title={x.name} color={x.color} key={x.id} />
            ))}
          </div>
        </div>
        <div className={styles.messengerWrap}>
          <header>
            <div className={styles.title}>
              <div className={styles.avatar}>
                <Avatar src="/static/interviewer.png" size={36} />
              </div>
              <p className={styles.name}>면접관</p>
            </div>

            <Button className={styles.submit} type="link">
              완료
            </Button>
          </header>
          <main>
            <div className={styles.messenger}>
              <div className={styles.messageWrap}>
                <div className={styles.message}>{messageList}</div>
              </div>
            </div>
          </main>
          <div className={styles.footer}>
            <textarea placeholder="답변 입력하기" />
            {/* <Button type="link">전송</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(InterviewMessengerPage);
