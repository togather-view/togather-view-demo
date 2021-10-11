import { memo, useState } from "react";
import { Button, Input } from "antd";
import Link from "next/link";

// component
import TagSelectComponent from "@src/components/common/TagSelect.component";

// dummy
import { GroupList } from "@dummy/group.data";
import { TechList } from "@dummy/tech.data";

// styles
import styles from "@src/styles/pages/Login.module.scss";
import tagStyles from "@src/styles/components/TagSelect.module.scss";

function SignUpPage() {
  const [selectedJobList, setSelectedJobList] = useState([]);
  const [selectedTechList, setSelectedTechList] = useState([]);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.logo}>
          <h1 className={styles.title}>회원가입</h1>
          <p className={styles.description}>투게더뷰에 어서오세요!</p>
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
          <h2>추가 정보</h2>
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
        <div className={styles.divider}>
          <div className={styles.line} />
          <div className={styles.contents}>이미 계정이 있다면</div>
          <div className={styles.line} />
        </div>
        <Link href="/login">
          <a>
            <Button className={styles.loginButton} size="large">
              로그인
            </Button>
          </a>
        </Link>

        <div className={styles.signupBottom} />
      </div>
    </div>
  );
}

export default memo(SignUpPage);
