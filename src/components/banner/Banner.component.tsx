import { memo, useMemo } from "react";

// styles
import styles from "@src/styles/components/Banner.module.scss";

function BannerComponent({ title, description, color, imgSrc }) {
  const bgColorStyles = useMemo(() => ({ backgroundColor: color }), [color]);
  return (
    <div className={styles.box} style={bgColorStyles}>
      <div className={styles.image}>
        <img src={imgSrc} alt={title} />
      </div>
      <h2 className={styles.subtitle}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default memo(BannerComponent);
