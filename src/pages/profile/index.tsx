import LayoutComponent from "@src/components/common/Layout.component";
import { memo, useCallback, useState } from "react";
import { Button, Menu } from "antd";

// dummy
import { questionList } from "@dummy/question.data";
import { answerList } from "@dummy/answer.data";

// component
import ProfileCardComponent from "@src/components/profile/ProfileCard.component";
import QuestionListElement from "@src/components/question/QuestionListElement.component";
import QuestionAnswerComponent from "@src/components/question/QuestionAnswer.component";

// styles
import styles from "@src/styles/pages/Profile.module.scss";
import { myAccount } from "@dummy/user.data";

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
          <ProfileCardComponent
            profile={myAccount}
            questionCount={30}
            answerCount={12}
            bookmarkCount={42}
          />
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
                {questionList.slice(0, 5).map((x) => (
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
                {questionList.slice(0, 5).map((x) => (
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
                {answerList.slice(0, 5).map((x) => (
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
