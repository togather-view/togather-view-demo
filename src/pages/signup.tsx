import { memo, useState } from "react";
import { Button, Input, Modal } from "antd";
import Link from "next/link";

// component
import TagSelectComponent from "@src/components/interview/TagSelect.component";

// dummy
import { GroupList } from "@dummy/group.data";
import { TechList } from "@dummy/tech.data";
import { myAccount } from "@dummy/user.data";

// styles
import styles from "@src/styles/pages/Login.module.scss";
import tagStyles from "@src/styles/components/TagSelect.module.scss";

function SignUpPage() {
  const [selectedJobList, setSelectedJobList] = useState(myAccount.jobList);
  const [selectedTechList, setSelectedTechList] = useState(myAccount.techList);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.logo}>
          <h1 className={styles.title}>투게더뷰</h1>
          <p className={styles.description}>함께 준비하는 개발자 기술 면접</p>
        </div>
        <div className={styles.form}>
          <div className={styles.item}>
            <p className={styles.label}>이메일</p>
            <Input className={styles.input} placeholder="이메일 입력" />
          </div>
          <div className={styles.item}>
            <p className={styles.label}>비밀번호</p>
            <Input
              className={styles.input}
              placeholder="비밀번호 입력"
              type="password"
            />
          </div>
          <div className={styles.item}>
            <p className={styles.label}>비밀번호 확인</p>
            <Input
              className={styles.input}
              placeholder="비밀번호 확인"
              type="password"
            />
          </div>
          <div className={styles.item}>
            <p className={styles.label}>별명</p>
            <Input className={styles.input} placeholder="별명 입력" />
          </div>
        </div>
        <div className={styles.divider}>
          <div className={styles.line} />
        </div>
        <div className={styles.tagSelectContainer}>
          <h4>관심 직무 선택</h4>
          <div className={styles.selectContainer}>
            <TagSelectComponent
              color="blue"
              selectedClassName={tagStyles.tagSelectedBlue}
              selectedList={selectedJobList}
              setSelectedList={setSelectedJobList}
              tagList={GroupList}
            />
          </div>
          <br />
          <h4>나의 주기술 선택</h4>
          <div className={styles.selectContainer}>
            <TagSelectComponent
              color="orange"
              selectedClassName={tagStyles.tagSelectedOrange}
              selectedList={selectedTechList}
              setSelectedList={setSelectedTechList}
              tagList={TechList}
            />
          </div>
        </div>
        <Link href="/login">
          <a>
            <Button className={styles.loginButton} type="primary" size="large">
              가입하기
            </Button>
          </a>
        </Link>

        <div className={styles.signupBottom} />
      </div>
    </div>
  );
}

export default memo(SignUpPage);
