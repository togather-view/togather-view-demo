import { memo, useMemo } from "react";
import Link from "next/link";
import { Avatar, Button, Dropdown, Menu } from "antd";

// dummy
import { myAccount } from "@dummy/user.data";

import styles from "@src/styles/Layout.module.scss";

function LayoutComponent({ showInterviewButton = true, children }) {
  const userMenu = useMemo(
    () => (
      <Menu className={styles.dropdownMenu}>
        <Menu.Item key={1}>
          <Link href="/profile">
            <a>내 정보</a>
          </Link>
        </Menu.Item>
        <Menu.Item key={2}>로그아웃</Menu.Item>
      </Menu>
    ),
    [],
  );
  return (
    <div className={styles.container}>
      {/*  Header  */}
      <header className={styles.header}>
        <div className={styles.wrap}>
          <div className={styles.content}>
            <Link href="/main">
              <a>
                <div className={styles.logo}>
                  <img
                    className={styles.logo}
                    src="/static/og-image.png"
                    alt="투게더뷰"
                  />
                </div>
                <div className={styles.logoContainer}>
                  <img
                    className={styles.logoImg}
                    src="/static/logo.png"
                    alt="투게더뷰"
                  />
                </div>
              </a>
            </Link>
            <div className={styles.menu}>
              {showInterviewButton && (
                <Link href="/interview">
                  <a>
                    <Button type="primary" shape="round">
                      면접 시작하기
                    </Button>
                  </a>
                </Link>
              )}
              <Dropdown
                className={styles.dropdown}
                overlay={userMenu}
                getPopupContainer={(t) => t.parentElement}
                placement="bottomCenter"
              >
                <Avatar src={myAccount.avatarUrl} className={styles.avatar} />
              </Dropdown>
            </div>
          </div>
        </div>
      </header>

      {/*  Main  */}
      <main className={styles.main}>
        <div className={styles.wrap}>{children}</div>
      </main>

      {/*  Footer  */}
      <footer className={styles.footer} />
    </div>
  );
}

export default memo(LayoutComponent);
