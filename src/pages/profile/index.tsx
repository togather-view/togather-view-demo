import LayoutComponent from "@src/components/common/Layout.component";
import { memo, useCallback, useState } from "react";
import { Avatar, Button, Menu } from "antd";

// dummy
import { myAccount } from "@dummy/user.data";
import { questionList } from "@dummy/question.data";
import { answerList } from "@dummy/answer.data";

// component
import TagComponent from "@src/components/common/Tag.component";
import QuestionListElement from "@src/components/question/QuestionListElement.component";
import QuestionAnswerComponent from "@src/components/question/QuestionAnswer.component";

// styles
import styles from "@src/styles/pages/Profile.module.scss";
import Link from "next/link";

const ProfileMenu = {
  RECORD: "RECORD",
  BOOKMARK: "BOOKMARK",
  ANSWER: "ANSWER",
  QUESTION: "QUESTION",
};

function ProfilePage() {
  const [menu, setMenu] = useState(ProfileMenu.RECORD);
  const onClickMenu = useCallback((e) => setMenu(e.key), []);
  return (
    <LayoutComponent>
      <div className={styles.wrap}>
        <section>
          <div className={styles.profile}>
            <div>
              <Avatar src={myAccount.avatarUrl} size={120} shape="square" />
            </div>
            <div className={styles.info}>
              <p className={styles.name}>
                {myAccount.familyName}
                {myAccount.firstName}
              </p>
              <div className={styles.tagList}>
                {myAccount.jobList.map((x) => (
                  <p key={x.id} className={styles.job}>
                    {x.name}
                  </p>
                ))}
              </div>
              <div className={styles.tech}>
                <div className={styles.tagList}>
                  {myAccount.techList.map((x) => (
                    <TagComponent key={x.id} title={x.name} color={x.color} />
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.countWrap}>
              <div>
                <p>답변 작성</p>
                <p>12</p>
              </div>
              <div>
                <p>질문 공유</p>
                <p>30</p>
              </div>
              <div>
                <p>북마크</p>
                <p>42</p>
              </div>
            </div>
          </div>
          <div className={styles.menu}>
            <Menu selectedKeys={[menu]} onSelect={onClickMenu}>
              <Menu.Item key={ProfileMenu.RECORD}>면접 기록</Menu.Item>
              <Menu.Item key={ProfileMenu.BOOKMARK}>북마크</Menu.Item>
              <Menu.Item key={ProfileMenu.ANSWER}>나의 답변</Menu.Item>
              <Menu.Item key={ProfileMenu.QUESTION}>공유한 질문</Menu.Item>
            </Menu>
          </div>
        </section>
        <section className={styles.contentsContainer}>
          {menu === ProfileMenu.BOOKMARK && (
            <div className={styles.contentsBox}>
              <h2>북마크</h2>
              <div>
                {questionList.slice(0, 3).map((x) => (
                  <QuestionListElement key={x.id} question={x} />
                ))}
              </div>
              <Button className={styles.more} type="link">
                더보기
              </Button>
            </div>
          )}
          {menu === ProfileMenu.QUESTION && (
            <div className={styles.contentsBox}>
              <h2>공유한 질문</h2>
              <div>
                {questionList.slice(0, 3).map((x) => (
                  <QuestionListElement key={x.id} question={x} />
                ))}
              </div>
              <Button className={styles.more} type="link">
                더보기
              </Button>
            </div>
          )}
          {menu === ProfileMenu.ANSWER && (
            <div className={styles.contentsBox}>
              <h2>나의 답변</h2>
              <div>
                {answerList.slice(0, 3).map((x) => (
                  <QuestionAnswerComponent key={x.id} answer={x} />
                ))}
              </div>
              <Button className={styles.more} type="link">
                더보기
              </Button>
            </div>
          )}
          {menu === ProfileMenu.RECORD && (
            <div className={styles.contentsBox}>
              <h2>모의 면접 기록</h2>
              <div>
                <p className={styles.noData}>기록이 없습니다.</p>
              </div>
            </div>
          )}
        </section>
      </div>
    </LayoutComponent>
  );
}

export default memo(ProfilePage);
