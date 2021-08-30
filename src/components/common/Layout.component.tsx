import { memo, useMemo } from "react";
import { FiBookmark, FiUser } from "react-icons/fi";
import { Button, Dropdown, Menu } from "antd";

import IconButtonComponent from "@src/components/common/IconButton.component";

import styles from "@src/styles/Layout.module.scss";

function LayoutComponent({ children }) {
  const userMenu = useMemo(
    () => (
      <Menu>
        <Menu.Item>내 정보</Menu.Item>
        <Menu.Item>로그아웃</Menu.Item>
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
            <div className={styles.logo}>투게더뷰</div>
            <div className={styles.menu}>
              <Button type="primary" shape="round">
                면접 시작하기
              </Button>
              <Dropdown overlay={userMenu}>
                <IconButtonComponent icon={<FiUser />} />
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
