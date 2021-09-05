import LayoutComponent from "@src/components/common/Layout.component";
import { memo } from "react";
import { Avatar } from "antd";

// dummy
import { myAccount } from "@dummy/user.data";

// component
import TagComponent from "@src/components/common/Tag.component";

// styles
import styles from "@src/styles/pages/Profile.module.scss";

function ProfilePage() {
  return (
    <LayoutComponent>
      <div className={styles.wrap}>
        <div>
          <Avatar src={myAccount.avatarUrl} size={150} shape="square" />
        </div>
        <div className={styles.info}>
          <p className={styles.name}>
            {myAccount.familyName}
            {myAccount.firstName}
          </p>
          <div>
            <div className={styles.tagList}>
              <p>희망 직군</p>
              <div>
                {myAccount.jobList.map((x) => (
                  <p key={x.id} className={styles.job}>
                    {x.name}
                  </p>
                ))}
              </div>
            </div>
            <div className={styles.tagList}>
              <p>주요 기술</p>
              <div>
                {myAccount.techList.map((x) => (
                  <TagComponent key={x.id} title={x.name} color={x.color} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
}

export default memo(ProfilePage);
