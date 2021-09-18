import { memo } from "react";
import Link from "next/link";

import BannerComponent from "@src/components/banner/Banner.component";

import styles from "@src/styles/components/Banner.module.scss";

function BookmarkBannerComponent({ color }) {
  return (
    <div className={styles.bannerWrap}>
      <Link href="/profile">
        <a>
          <BannerComponent
            title="북마크 보러가기"
            description="저장해둔 질문을 확인해보세요!"
            color={color}
            imgSrc="/static/illustrations/book.png"
          />
        </a>
      </Link>
    </div>
  );
}

export default memo(BookmarkBannerComponent);
