import { memo } from "react";
import { Button, Input } from "antd";

import styles from "@src/styles/pages/Login.module.scss";
import Link from "next/link";

function LoginPage() {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.logo}>
          <h1 className={styles.title}>투게더뷰</h1>
          <p className={styles.description}>
            함께 준비하는 개발자 기술 면접 대비 플랫폼
          </p>
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
        </div>
        <Link href="/">
          <a>
            <Button className={styles.loginButton} type="primary" size="large">
              로그인
            </Button>
          </a>
        </Link>
        <div className={styles.divider}>
          <div className={styles.line} />
          <div className={styles.contents}>또는</div>
          <div className={styles.line} />
        </div>
        <Link href="/signup">
          <a>
            <Button className={styles.loginButton} size="large">
              <span className={styles.oauthIcon}>✉️</span>이메일로 회원가입
            </Button>
          </a>
        </Link>
        <Button className={styles.loginButton} size="large">
          <img
            className={styles.oauthIcon}
            src="https://developers.google.com/identity/images/g-logo.png?hl=ko"
            alt="Google로 시작하기"
          />
          Google로 시작하기
        </Button>
      </div>
    </section>
  );
}

export default memo(LoginPage);
