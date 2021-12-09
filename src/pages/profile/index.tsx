import LayoutComponent from "@src/components/common/Layout.component";
import { memo, useCallback, useState } from "react";
import { Button, Menu, Tabs } from "antd";

// dummy
import { questionList } from "@dummy/question.data";
import { answerList } from "@dummy/answer.data";
import { myAccount } from "@dummy/user.data";

// component
import ProfileCardComponent from "@src/components/profile/ProfileCard.component";
import QuestionListElement from "@src/components/question/QuestionListElement.component";
import QuestionAnswerComponent from "@src/components/question/QuestionAnswer.component";
import { MyPageSeo } from "@src/components/seo/Seo.component";

// styles
import styles from "@src/styles/pages/Profile.module.scss";

const ProfileMenu = {
  RECORD: "RECORD",
  BOOKMARK: "BOOKMARK",
  ANSWER: "ANSWER",
  QUESTION: "QUESTION",
};

function ProfilePage() {
  const [menu, setMenu] = useState(ProfileMenu.RECORD);

  const onClickMenu = useCallback((e) => setMenu(e.key), []);
  const onClickTab = useCallback((e) => setMenu(e), []);

  return (
    <LayoutComponent>
      <MyPageSeo />
      <div className={styles.wrap}>
        <section>
          <ProfileCardComponent
            profile={myAccount}
            questionCount={30}
            answerCount={12}
            bookmarkCount={42}
          />
          <div className={styles.menu}>
            <Menu
              className={styles.desktopTablet}
              selectedKeys={[menu]}
              onSelect={onClickMenu}
              mode="vertical"
            >
              <Menu.Item icon={<span>📑</span>} key={ProfileMenu.RECORD}>
                면접 기록
              </Menu.Item>
              <Menu.Item icon={<span>⭐</span>} key={ProfileMenu.BOOKMARK}>
                북마크
              </Menu.Item>
              <Menu.Item icon={<span>✏️</span>} key={ProfileMenu.ANSWER}>
                ️나의 답변
              </Menu.Item>
              <Menu.Item icon={<span>💬</span>} key={ProfileMenu.QUESTION}>
                공유한 질문
              </Menu.Item>
            </Menu>
            <div className={styles.mobile}>
              <Tabs
                className={styles.mobileMenu}
                activeKey={menu}
                onChange={onClickTab}
              >
                <Tabs.TabPane key={ProfileMenu.RECORD} tab="면접 기록" />
                <Tabs.TabPane key={ProfileMenu.BOOKMARK} tab="북마크" />
                <Tabs.TabPane key={ProfileMenu.ANSWER} tab="나의 답변" />
                <Tabs.TabPane key={ProfileMenu.QUESTION} tab="공유한 질문" />
              </Tabs>
            </div>
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
              <h2>나의 예상 질문</h2>
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
